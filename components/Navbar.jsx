import React from "react";

const Navbar = () => {
	//Funktionen

	//HTML
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container">
				<a className="navbar-brand" href="/">
					MyCargonaut
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li>
							<form className="d-flex" role="search">
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
						</li>
						<li>
							<a className="nav-link" href="/fctemplate">
								FC Template
							</a>
						</li>
						<li>
							<a className="nav-link" href="/add-ride">
								Angebot veröffentlichen
							</a>
						</li>
					</ul>
					<div className="nav-item">
						<a className="navbar-brand" aria-current="page" href="/profile">
							<img
								className="rounded-circle d-inline-block align-top"
								src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
								alt="avatar"
								width="50"
								height="50"
							/>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
