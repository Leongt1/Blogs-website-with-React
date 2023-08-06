import React from "react";
import BlogCard from "./BlogCard";

function BlogList({blogs, removeBlogHandler}) {

	const removeBlog = (id) => {
		removeBlogHandler(id)
	}

	const renderBlogs = blogs.map(blog => {
		return <BlogCard key={blog.id} blog={blog} getBlogId={removeBlog} />
	})
	return (
		<>
		<div className="container p-5 mt-5 pb-5 rounded-3 shadow" style={{"backgroundColor":" #eeffe6"}}>
			<h2 className='pt-4 pb-4 m-0 d-flex justify-content-center'>Blog List</h2>
			<div className="row d-flex justify-content-around">
				{
					renderBlogs.length > 0 ? renderBlogs : "No blogs avaiable!"
				}
			</div>
		</div> 
		</>
		
	);
}

export default BlogList;
