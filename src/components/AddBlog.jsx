import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBlog({addBlogHandler}) {

	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [occupation, setOccupation] = useState("");
	const [about, setAbout] = useState("");

  const navigate = useNavigate()

	const add = (e) => {
		e.preventDefault();
    if(name === '' || age === '' || occupation === '' || about === '') return alert('All fields are required!')

    addBlogHandler({name, age, occupation, about})
    setName('')
    setAge('')
    setOccupation('')
    setAbout('')
    navigate('/')
	};

	return (
		<form className="container shadow mt-5 p-5 pt-2 pb-4" onSubmit={(e) => add(e)}>
			<h2 className="d-flex justify-content-center m-4">Add Blog</h2>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">
					Name
				</label>
				<input
					type="text"
					className="form-control"
					id="exampleFormControlInput1"
					placeholder="Ex: Jenny"
          value={name}
          onChange={e => setName(e.target.value)}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput2" className="form-label">
					Age
				</label>
				<input
					type="number"
					className="form-control"
					id="exampleFormControlInput2"
					placeholder="Ex: 18"
          value={age}
          onChange={e => setAge(e.target.value)}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput3" className="form-label">
					Occupation
				</label>
				<input
					type="text"
					className="form-control"
					id="exampleFormControlInput3"
					placeholder="Ex: Teacher"
          value={occupation}
          onChange={e => setOccupation(e.target.value)}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput4" className="form-label">
					About me:
				</label>
				<input
					className="form-control"
					id="exampleFormControlInput4"
					placeholder="Write about you..."
          value={about}
          onChange={e => setAbout(e.target.value)}
				/>
			</div>
			<div className="d-flex justify-content-center">
				<button className="btn btn-primary w-25 border-2" onClick={(e) => {}}>
					Add
				</button>
			</div>
		</form>
	);
}

export default AddBlog;
