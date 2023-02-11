import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetBlogQuery } from '../../features/api/apiSlice';
function Blog() {
  let { id } = useParams();
  const { data, isLoading } = useGetBlogQuery();
  const blog = data?.find(blog => blog._id === id);
   
    return (
      <div className="p-3 offset-3   mx-auto w-75 ">
        <div className='d-flex justify-content-center h-50'>
          <img className="rounded shadow w-100 h-100" src={blog?.image} alt="" />
        </div>
        <h1 className="text-dark my-5">{blog?.firsttitle}</h1>
        {
          <p className="text-muted lh-lg my-5">
            {blog?.firstdescription.slice(0, 500)}
          </p>
        }
        {
          <p className="text-muted lh-lg my-5">
            {blog?.firstdescription.slice(500, 1000)}
          </p>
        }
        {
          <p className="text-muted lh-lg my-5">
            {blog?.firstdescription.slice(0, 450)}
          </p>
        }
        {
          <p className="text-muted lh-lg">
            {blog?.firstdescription.slice(0, 300)}
          </p>
        }
        {}
        <h2>
          {blog?.quote && (
            <h1 className="text-dark my-5 lh-base">{blog?.quote}</h1>
          )}
        </h2>
        <h2 className="text-dark fs-1 fw-bold my-5">{blog?.secondtitle}</h2>
        <p className="text-muted lh-lg">
          {blog?.seconddescription.slice(0, 300)}
        </p>
        <p className="text-muted lh-lg  my-5">
          {blog?.seconddescription.slice(0, 320)}
        </p>
        <p className="text-muted lh-lg my-5">
          {blog?.seconddescription.slice(300, 500)}
        </p>
        <p className="text-muted lh-lg my-5">
          {blog?.seconddescription.slice(200, 500)}
        </p>
        <p className="text-muted lh-lg my-5">
          {blog?.seconddescription.slice(100, 300)}
        </p>
      </div>
    );
}

export default Blog;