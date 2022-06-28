import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import router, { useRouter } from "next/router";
import { Modal, Button, Alert } from "react-bootstrap";
import { auth } from "../firebase";

// auth

const SignOutModal = (props) => {
	//auth
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [checkPassword, setCheckPassword] = useState("");
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	//modal
	const { showModal, setShowModal } = props;
	const [showSignUp, setShowSignUp] = useState(false);

	const handleClose = () => {
		setShowModal(false);
		setError(false);
		setSuccess(false);
	};

	return (
		<div>
			<Modal
				style={styles.container}
				show={showModal}
				onHide={handleClose}
				centered
			>
				{/* signIn */}
				<Modal.Header closeButton style={styles.modalCenter}>
					<Modal.Title style={styles.loginTitle} className="ms-auto">
						{showSignUp == true ? "Registrierung" : "Login"}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body style={styles.modalCenter}>
					<form>
						<Button
							variant="primary"
							style={styles.signWGBtn}
							onClick={handleClose}
						>
							weiter mit Google{" "}
							<FontAwesomeIcon className="icon" icon={faGoogle} />
						</Button>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default SignOutModal;

let styles = {
	aReg: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "10px",
	},
	border: {
		border: "1px solid #659e98",
	},
	container: {
		borderRadius: "15px !important",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
	},
	textInput: {
		height: "50px",
		width: "456px",
		borderRadius: "15px",
		marginTop: "30px",
		borderColor: "#8cb6b2",
	},
	link: {
		margin: "5px",
	},
	loginTitle: {
		fontSize: "26px",
		color: "#4F4F4F",
	},
	modalCenter: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	modalFooter: {
		width: "456px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	signInBtn: {
		height: "55px",
		width: "456px",
		borderRadius: "15px",
		borderWidth: "0px",
		backgroundColor: "#659e98",
		marginTop: "30px",
	},
	signWGBtn: {
		height: "50px",
		width: "456px",
		borderRadius: "15px",
		borderWidth: "1px",
		borderColor: "#659e98",
		color: "black",
		backgroundColor: "white",
		marginTop: "30px",
		marginBottom: "30px",
	},
};
