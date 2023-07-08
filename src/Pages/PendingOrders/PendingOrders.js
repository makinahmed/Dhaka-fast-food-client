import React from "react";
import {
  useAcceptSoldProductMutation,
  useGetMyOrdersQuery,
} from "../../features/api/apiSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function PendingOrders() {
  const navigate  = useNavigate()
  const { data } = useGetMyOrdersQuery();
  const allPendingOrders = data?.filter(order => order.status === "Pending");
  const [acceptSoldProduct, { isLoading, status, isSuccess,isError }] =
    useAcceptSoldProductMutation();
  const handleAccept = (data) => {
   const obj = { ...data, status: true };
    acceptSoldProduct(obj)
    // navigate("/")
  };
  const handleReject = (data) => {
    const obj = { ...data, status: false }
    acceptSoldProduct(obj);
    navigate("/");
  }

  return (
    <>
      {data?.length ? (
        <div>
          <div className="fw-bold my-5 text-center fs-1">Pending Orders</div>
          <table
            title="Pending Orders"
            class="table table-striped table-hover border border-1 shadow p-1 rounded rounded-1"
          >
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Order Status</th>
              </tr>
            </thead>
            <tbody>
              {allPendingOrders?.map((order, index) => (
                <tr key={index}>
                  <th>
                    {order?.firstname} {order?.lastname}
                  </th>
                  <td>{order?.email}</td>
                  {order?.status === "Pending" && (
                    <td className="text-success">
                      <button
                        onClick={() => handleAccept(order)}
                        className="btn btn-success me-2"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(order)}
                        className="btn btn-danger ms-2"
                      >
                        Reject
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-danger mx-auto my-5 ">No Pending Orders</h2>
      )}
    </>
  );
}

export default PendingOrders;
