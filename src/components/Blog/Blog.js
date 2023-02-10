import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetBlogQuery } from '../../features/api/apiSlice';
function Blog() {
  let { id } = useParams();
  const { data, isLoading } = useGetBlogQuery();
  const blog = data?.find(blog => blog._id === id);
   
    return (
      <div className="p-3 offset-3 text-center mx-auto">
        <img className="rounded shadow img-fluid" src={blog?.image} alt="" />
        <h1 className="text-dark my-5">{blog?.firsttitle}</h1>
        <p className="text-muted lh-lg">{blog?.firstdescription}</p>
        <h2>
          {blog?.quote && (
            <h1 className="text-dark my-5 lh-base">{blog?.quote}</h1>
          )}
        </h2>
        <h2 className="text-dark fs-1 fw-bold">{blog?.secondtitle}</h2>
        <p className="text-muted lh-lg">{blog?.seconddescription}</p>
      </div>
    );
}

export default Blog;