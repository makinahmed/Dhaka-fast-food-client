import React from "react";
import { useGetBlogQuery } from "../../features/api/apiSlice";
import LatestNewsCart from "../LatestNewsCart/LatestNewsCart";
import "./latestNews.css";

function LatestNews() {
  const { data, isLoading } = useGetBlogQuery();

  return (
    <div className="container-fluid">
      <div className="row">
        {data?.slice(0,3).map((blog) => (
          <LatestNewsCart blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default LatestNews;
