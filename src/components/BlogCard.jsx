import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog, getBlogId }) {
	const { id, name, age, occupation } = blog;

	return (
		<div
			className="card bg-light p-4 pt-0 mb-4 container align-items-center"
			style={{ width: "20rem" }}
		>
			<div className="d-flex justify-content-end p-2" style={{"width": "inherit"}}>
				<button
						onClick={() => getBlogId(id)}
						type="button"
						className="btn-close "
						aria-label="Close"
					></button>
			</div>
			<h5 className="card-title">Name: {name}</h5>
			<h6 className="card-subtitle mb-2 text-muted">Age: {age}</h6>
			<p className="card-text">I am a {occupation}</p>
			<div className="d-flex justify-content-around align-items-center gap-3">
				<Link to={`/edit`} state={{blog: blog}}>
					<button className="btn btn-primary ">Edit Blog</button>
				</Link>
				<Link to={`/blog/${id}`} state={{blog: blog}}>
					<button className="btn btn-primary ">View Blog</button>
				</Link>
			</div>
		</div>
	);
}

export default BlogCard;
