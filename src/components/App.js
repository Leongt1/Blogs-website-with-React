import { Route, Routes } from "react-router-dom";
import api from "../api/blogBaseURL";
import uuid from "react-native-uuid";
import "./App.css";
import Header from "./Header";
import BlogList from "./BlogList";
import AddBlog from "./AddBlog";
import { useEffect, useState } from "react";
import BlogDetails from "./BlogDetails";
import EditBlog from "./EditBlog";

function App() {
	const [blogs, setBlogs] = useState([]);

	const retrieveBlogDataFromJSOn = async () => {
		const res = await api.get("/blogs");
		return res.data;
	};

	const addBlogHandler = async (blog) => {
		// console.log(blog)
		const req = {
			id: uuid.v4(),
			...blog,
		};

		const res = await api.post("/blogs", req);
		setBlogs([...blogs, res.data]);
	};

	const removeBlogHandler = async (id) => {
		await api.delete(`/blogs/${id}`);
		const newBlogList = blogs.filter((blog) => {
			return blog.id !== id;
		});

		setBlogs(newBlogList);
	};

	const updateBlogHandler = async (blog) => {
		const { id, name, age, occupation, about } = blog;

		const res = await api.put(`/blogs/${id}`, {id, name, age, occupation, about});
		const newData = res.data

		setBlogs(
			blogs.map(blog => {
				return blog.id === newData.id ? {...newData} : blog
			})
		)
	};

	useEffect(() => {
		const getAllBlogs = async () => {
			const allBlogs = await retrieveBlogDataFromJSOn();
			if (allBlogs) setBlogs(allBlogs);
		};

		getAllBlogs();
	}, []);

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<BlogList blogs={blogs} removeBlogHandler={removeBlogHandler} />
					}
				/>
				<Route
					path="/add"
					element={<AddBlog addBlogHandler={addBlogHandler} />}
				/>
				<Route path="/blog/:id" element={<BlogDetails />} />
				<Route
					path="/edit"
					element={<EditBlog updateBlogHandler={updateBlogHandler} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
