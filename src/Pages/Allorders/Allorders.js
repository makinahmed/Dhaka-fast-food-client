import React from "react";
import {
  useAcceptSoldProductMutation,
  useGetMyOrdersQuery,
} from "../../features/api/apiSlice";

function Allorders() {
  const { data } = useGetMyOrdersQuery();
   const [acceptSoldProduct, { isLoading, status, isSuccess }] =
    useAcceptSoldProductMutation();
  const handleAccept = (data) => {
    const obj = { ...data, status: true };
    acceptSoldProduct(obj);
  };
  const handleReject = (data) => {
    const obj = { ...data, status: false };
    acceptSoldProduct(obj);
  };

  return (
    <div>
      <div className="fw-bold my-5 text-center fs-1">All Orders</div>
      <table
        title="Pending Orders"
        class="table table-striped table-hover border border-1 shadow p-1 rounded rounded-1"
      >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th>Items</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order) => (
            <tr>
              <th>
                {order?.firstname} {order?.lastname}
              </th>
              <td>{order?.email}</td>

              <td>{order?.phone}</td>
              {order.products && (
                <td>
                  {order?.products.map((item) => (
                    <td>{item?.firsttitle}|</td>
                  ))}
                </td>
              )}
              <td className={`${order.status === "Pending" && "text-danger"}`}>
                {order?.status === true && (
                  <span className="text-success">Approved</span>
                )}
                {order?.status === false && (
                  <span className="text-danger fw-bold">Rejected</span>
                )}
                {order?.status === "Pending" && (
                  <span className="text-danger">Pending</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Allorders;
