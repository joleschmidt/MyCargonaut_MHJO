import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const SignInModal = (props) => {
	const { showModal, setShowModal } = props;
	const handleClose = () => {
		setShowModal(false);
		setError(false);
		setSuccess(false);
	};
	const [showSignUp, setShowSignUp] = useState(false);

	//auth
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [checkPassword, setCheckPassword] = useState("");
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleSignIn = () => {
		if (password === "") {
			setError(true);
			setSuccess(false);
		} else {
			setEmail("");
			setPassword("");
			setCheckPassword("");
			setError(false);
			setSuccess(true);
		}
	};

	const handleSignUp = () => {
		if (password !== checkPassword) {
			setError(true);
			setSuccess(false);
		} else {
			setEmail("");
			setPassword("");
			setCheckPassword("");
			setError(false);
			setSuccess(true);
		}
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
						<input
							type="email"
							placeholder="E-Mail-Adresse"
							style={styles.textInput}
							className="form-control"
							autoFocus
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Passwort"
							style={styles.textInput}
							className="form-control"
							autoFocus
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{showSignUp == true ? (
							<input
								type="password"
								placeholder="Passwort wiederholen"
								style={styles.textInput}
								className="form-control"
								autoFocus
								value={checkPassword}
								onChange={(e) => setCheckPassword(e.target.value)}
							/>
						) : null}
						{error == true ? (
							<p className="text-danger mt-2">Falsches Passwort!</p>
						) : null}
						{success == true ? (
							<p className=" text-info mt-2">Anmeldung war erfolgreich!</p>
						) : null}
						{showSignUp == true ? (
							<Button
								variant="primary"
								style={styles.signInBtn}
								onClick={() => handleSignUp()}
							>
								Registrieren
							</Button>
						) : (
							<Button
								variant="primary"
								style={styles.signInBtn}
								onClick={() => handleSignIn()}
							>
								Anmelden
							</Button>
						)}

						{showSignUp == false ? (
							<div style={styles.aReg}>
								noch kein Konto?{" "}
								<a
									href="javascript:;"
									onClick={() => setShowSignUp(true)}
									style={styles.link}
								>
									{" "}
									hier registrieren
								</a>
							</div>
						) : (
							<div style={styles.aReg}>
								schon ein Konto?{" "}
								<a
									href="javascript:;"
									onClick={() => setShowSignUp(false)}
									style={styles.link}
								>
									{" "}
									hier anmelden
								</a>
							</div>
						)}

						<hr style={styles.border} />
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

export default SignInModal;

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
