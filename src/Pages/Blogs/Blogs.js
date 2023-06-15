import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import BlogsCart from "../../components/BlogsCart/BlogsCart";
import SuggestedBlogCart from "../../components/SuggestedBlogCart/SuggestedBlogCart";
import { RotatingLines } from "react-loader-spinner";

import { useGetBlogQuery } from "../../features/api/apiSlice";
import "./blogs.css";

import Banner from "../../components/Banner/Banner";
function Blogs() {
  const { data, isLoading,isSuccess } = useGetBlogQuery();
  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 3;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math?.ceil(data?.length / itemsPerPage);
  //  pagination handler
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };


  return (
    <>
      <div className="my-auto ">
        {isLoading && (
          <div className="d-flex align-items-center justify-content-center">
            <RotatingLines
              strokeWidth="5"
              animationDuration="0.75"
              width="100"
              strokeColor=" #ffc222"
            />
          </div>
        )}
      </div>
      {isSuccess && (
        <div className="container-fluid my-5">
          <Banner title="Blog" />
          <div className="row g-5 mt-5">
            <div className="col-sm-12 col-md-8 row">
              {data &&
                currentItems?.map((blog) => (
                  <div className=" border rounded p-5 my-5">
                    <BlogsCart blog={blog} />
                  </div>
                ))}
            </div>
            <div className="col-sm-12 col-md-4 row g-5">
              <div className="mt-0 pt-0 ">
                {data?.map((blog) => (
                  <SuggestedBlogCart blog={blog} />
                ))}
              </div>
            </div>

            {/* <Blog/> */}
          </div>

          <ReactPaginate
            containerClassName="pagination"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </>
  );
}

export default Blogs;
//  {isLoading && <InfinitySpin width="200" color="#4fa94d" />}