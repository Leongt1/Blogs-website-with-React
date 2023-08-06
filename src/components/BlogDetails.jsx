import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function BlogDetails() {
  const location = useLocation()
  // console.log(location.state.blog)
  const {name, age, occupation, about} = location.state.blog
  return (
    <div>
      <div
        className="card bg-light mt-5 p-4 mb-4 container align-items-center"
        style={{ width: "20rem" }}
      >
        <h5 className="card-title">Name: {name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Age: {age}</h6>
        <p className="card-text">I am a {occupation}</p>
        <hr/>
        <p><i>{about}</i></p>
      </div>
      <div className='d-flex justify-content-center'>
        <Link to={`/`}>
         <button className='btn btn-primary'>Back to Blogs</button>
        </Link>
      </div>
    </div>
    
  )
}

export default BlogDetails