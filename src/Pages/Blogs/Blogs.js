import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Blog from "../../components/Blog/Blog";
import BlogsCart from "../../components/BlogsCart/BlogsCart";
import SuggestedBlogCart from "../../components/SuggestedBlogCart/SuggestedBlogCart";
import { useGetBlogQuery } from "../../features/api/apiSlice";
import "./blogs.css";
function Blogs() {
  const { data, isLoading } = useGetBlogQuery();
  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 3;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math?.ceil(data?.length / itemsPerPage);
  //  pagination handler
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  console.log(data, "data");
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-12 col-md-8 row">
          {data &&
            currentItems?.map((blog) => (
              <div className=" border rounded p-0">
                <BlogsCart blog={blog} />
              </div>
            ))}
        </div>
        <div className="col-sm-12 col-md-4 row">
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
  );
}

export default Blogs;
