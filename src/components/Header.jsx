import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav className="navbar navbar-light border" style={{"backgroundColor": " #e6fff5"}}>
			<div className="container-fluid">
				<div className="d-flex align-items-center justify-content-between">

					<h2 className="btn navbar-brand fs-2">
						Blog's
					</h2>

					<Link to={`/`}>
					<button className="btn btn-secondary">
						Blog List
					</button>
					</Link>

					<Link to={`/add`}>
						<button className="btn btn-secondary m-3">
							Add Content
						</button>
						</Link>
				</div>
			
				<form className="d-flex d-none">
					<input
						className="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button className="btn btn-outline-success" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
}

export default Header;
