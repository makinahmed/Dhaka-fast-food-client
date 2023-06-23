import React from "react";
import { useGetMyOrdersQuery } from "../../features/api/apiSlice";
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
function MyOrders() {
  const { data } = useGetMyOrdersQuery();
  const { email } = useSelector((state) => state?.auth);
  const orders = data?.filter(order => order?.email === email);

  return (
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Order Status</th>
        </tr>
      </thead>
      {!orders && (
        <RotatingLines
          strokeWidth="5"
          animationDuration="0.75"
          width="100"
          strokeColor=" #ffc222"
        />
      )}

        <tbody>
          {orders?.map((order) => (
            <tr>
              <th>
                {order?.firstname} {order?.lastname}
              </th>
              <td>{order?.email}</td>
              {
                <td
                  className={`${
                    order?.status === "Pending" ||
                    order?.status === false ||
                    order?.status === undefined
                      ? "text-danger"
                      : "text-success"
                  }               `}
                >
                  {order?.status === "Pending" && order?.status}{" "}
                  {order?.status === true && "Approved"}{" "}
                  {order?.status === false && "Rejected"}{" "}
                  {order?.status === undefined && "Rejected"}{" "}
                </td>
              }
            </tr>
          ))}
        </tbody>
      
    </table>
  );
}

export default MyOrders;
