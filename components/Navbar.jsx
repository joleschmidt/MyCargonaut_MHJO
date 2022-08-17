import React, { useEffect, useState } from "react";
import { Image, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import SignInModal from "./SignInModal";
import firebase from "firebase";
import router, { useRouter } from "next/router";
import { useContext, createContext } from "react";
import AuthContext from "../context/AuthContext";
import { useAuth } from "../pages/_app";

const Navbar = () => {
	//functions
	const [show, setShow] = useState(false);
	const [error, setError] = useState(null);
	const [loggedIn, setLoggedIn] = useState(true);
	const handleShow = () => setShow(true);

	//context
	const { currentUser, userData } = useAuth();

	useEffect(() => {
		if (currentUser !== null) {
			setLoggedIn(true);
			//alert(currentUser.email);
		} else {
			setLoggedIn(false);
		}
	}, []);

	const handleLogout = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				router.push("/");
			})
			.catch((err) => setError(err.message));
	};

	//HTML
	return (
		<Nav style={styles.nav} className="navbar navbar-expand-lg">
			<a href="/#">
				<Image
					style={styles.image}
					className="navbar-brand"
					alt={"logo"}
					src={"/semi_androidMyCargonautmdpi.png"}
				/>
			</a>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li>
						<a>Suche</a>
					</li>
					<li>
						<a className="test" href="/add-shipping" style={styles.link}>
							Angebot veröffentlichen
						</a>
					</li>
				</ul>
				{loggedIn !== true ? (
					<ul className="navbar-nav">
						<li className="nav-item">
							{/* 
							anker tag that calls the handleLogout function 
							<a href="#" onClick={handleLogout}>

							*/}
							<a href="#">
								<FontAwesomeIcon
									className={"icon fa-2x"}
									icon={faUser}
									onClick={handleShow}
									style={{
										color: "#005B52",
										position: "absolute",
										right: "100px",
									}}
								/>
							</a>
						</li>
					</ul>
				) : (
					<ul className="navbar-nav">
						<li className="nav-item">
							<a href="#">
								<FontAwesomeIcon
									className={"icon fa-2x"}
									icon={faRightFromBracket}
									onClick={handleLogout}
									style={{
										color: "#005B52",
										position: "absolute",
										right: "100px",
									}}
								/>
							</a>
						</li>
						<li className="nav-item">
							<a href="/profile">
								<img
									className="rounded-circle d-inline-block align-top"
									src={userData.image}
									alt="avatar"
									width="50"
									height="50"
									style={{
										color: "#005B52",
										position: "absolute",
										right: "15px",
										top: "25px",
									}}
								/>
							</a>
						</li>
					</ul>
				)}
			</div>
			<SignInModal showModal={show} setShowModal={setShow} />
		</Nav>
	);
};

export default Navbar;

//css
let styles = {
	nav: {
		color: "#005B52",
		backgroundColor: "#FFFFFF",
	},
	image: {
		height: 50,
		width: 130,
		marginLeft: "15px",
	},
	link: {
		cursor: "default",
		textDecoration: "none",
		color: "#005B52",
		marginLeft: "15px",
	},
};
