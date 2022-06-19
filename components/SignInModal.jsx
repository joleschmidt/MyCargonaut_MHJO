import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const SignInModal = (props) => {
	const { showModal, setShowModal } = props;

	const handleClose = () => setShowModal(false);

	return (
		<div>
			<Modal
				style={styles.container}
				show={showModal}
				onHide={handleClose}
				centered
			>
				<Modal.Header closeButton style={styles.modalCenter}>
					<Modal.Title style={styles.loginTitle} className="ms-auto">
						Login
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
						/>
						<input
							type="password"
							placeholder="Passwort"
							style={styles.textInput}
							className="form-control"
							autoFocus
						/>
						<Button
							variant="primary"
							style={styles.signInBtn}
							onClick={handleClose}
						>
							anmelden
						</Button>
						<div style={styles.aReg}>
							noch kein Konto?{" "}
							<a href="#" style={styles.link}>
								{" "}
								hier registrieren
							</a>
						</div>
						<hr style={styles.border} />
						<Button
							variant="primary"
							style={styles.signWGBtn}
							onClick={handleClose}
						>
							weiter mit Google
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
