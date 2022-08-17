import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import router, { useRouter } from "next/router";
import { Modal, Button, Alert } from "react-bootstrap";
import firebase, { auth } from "../firebase";

const SignInModal = (props) => {
	//auth
	const [image, setImage] = useState(null);
	const [url, setUrl] = useState("");
	const [first, setFirst] = useState("");
	const [last, setLast] = useState("");
	const [age, setAge] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [checkPassword, setCheckPassword] = useState("");
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);
	const [isUploaded, setIsUploaded] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	//modal
	const { showModal, setShowModal } = props;
	const [showSignUp, setShowSignUp] = useState(false);

	const handleClose = () => {
		setShowModal(false);
		setError(false);
		setSuccess(false);
	};

	const validatePassword = () => {
		let isValid = true;
		if (password !== "" && checkPassword !== "") {
			if (password !== checkPassword) {
				isValid = false;
				setError("Passwords does not match");
			}
		}
		return isValid;
	};

	const handleSignIn = (event) => {
		event.preventDefault();
		if (validatePassword()) {
			auth
				.signInWithEmailAndPassword(email, password)
				.then((res) => {
					setSuccess(true);
					setError(false);
					setShowModal(false);
					//router.push("/profile");
				})
				.catch((error) => {
					setError(error.message);
					setSuccess(false);
				});
		}
		setEmail("");
		setPassword("");
		setCheckPassword("");
	};
	//add user to firestore
	const addUser = async () => {
		await firebase
			.firestore()
			.collection("users")
			.doc(auth.currentUser.uid)
			.set({
				first: first,
				last: last,
				age: age,
				email: email,
				image: url,
				uid: auth.currentUser.uid,
			});
	};

	const upload = () => {
		if (image == null) return;
		setIsLoading(true);

		firebase
			.storage()
			.ref(`/profileImages/${image.name}`)
			.put(image)
			.then(() => {
				firebase
					.storage()
					.ref(`/profileImages/${image.name}`)
					.getDownloadURL()
					.then((url) => {
						setUrl(url);
						console.log(url);
						setIsLoading(false);
						setIsUploaded(true);
					})
					.catch((err) => {
						console.log(err);
					});
			});
	};

	//sign up

	const handleSignUp = (event) => {
		event.preventDefault();
		setError("");
		if (url === "") {
			setError("Please upload an image");
		} else if (validatePassword()) {
			// Create a new user with email and password using firebase
			auth
				.createUserWithEmailAndPassword(email, password)
				.then((res) => {
					addUser();
					setSuccess(true);
					setError(false);
					setShowModal(false);
					router.push("/profile");
				})
				.catch((err) => setError(err.message));
		}
		setEmail("");
		setPassword("");
		setCheckPassword("");
	};

	/* 	const signUpWithGoogle = () => {
		auth
			.signInWithPopup(new auth.GoogleAuthProvider())
			.then((res) => {
				setSuccess(true);	
				setError(false);
				setShowModal(false);
				router.push("/profile");
			}
		)
			.catch((err) => setError(err.message));
	}
 */
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
					{}
					{showSignUp !== true ? (
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
							{error == true ? (
								<p className="text-danger mt-2">
									Bitte überprüfe deine Eingaben!
								</p>
							) : null}
							{success == true ? (
								<p className=" text-info mt-2">Anmeldung war erfolgreich!</p>
							) : null}
							<Button
								variant="primary"
								style={styles.signInBtn}
								onClick={handleSignIn}
							>
								Anmelden
							</Button>
							{error && <Alert color="danger">{error}</Alert>}

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
					) : (
						<form>
							<input
								type="text"
								placeholder="Vorname"
								style={styles.textInput}
								className="form-control"
								autoFocus
								value={first}
								onChange={(e) => setFirst(e.target.value)}
							/>
							<input
								type="text"
								placeholder="Nachname"
								style={styles.textInput}
								className="form-control"
								autoFocus
								value={last}
								onChange={(e) => setLast(e.target.value)}
							/>
							<input
								type="number"
								placeholder="Alter"
								style={styles.textInput}
								className="form-control"
								autoFocus
								value={age}
								onChange={(e) => setAge(e.target.value)}
							/>
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
							<input
								type="password"
								placeholder="Passwort wiederholen"
								style={styles.textInput}
								className="form-control"
								autoFocus
								value={checkPassword}
								onChange={(e) => setCheckPassword(e.target.value)}
							/>
							<input
								type="file"
								accept=".jpg, .jpeg, .png"
								style={styles.imageInput}
								onChange={(e) => {
									setImage(e.target.files[0]);
								}}
							/>
							{isUploaded == false ? (
								<Button onClick={upload}>Upload</Button>
							) : null}
							{isLoading == true ? <Alert>..uploading Image</Alert> : null}
							{error == true ? (
								<p className="text-danger mt-2">
									Bitte überprüfe deine Eingaben!
								</p>
							) : null}
							{success == true ? (
								<p className=" text-info mt-2">Anmeldung war erfolgreich!</p>
							) : null}

							<Button
								variant="primary"
								style={styles.signInBtn}
								onClick={handleSignUp}
							>
								Registrieren
							</Button>

							{error && <Alert color="danger">{error}</Alert>}

							<div style={styles.aReg}>
								Du hast bereits ein Konto?{" "}
								<a
									href="javascript:;"
									onClick={() => setShowSignUp(false)}
									style={styles.link}
								>
									{" "}
									hier anmelden
								</a>
							</div>
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
					)}
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
	imageInput: {
		height: "50px",
		width: "456px",
		marginTop: "30px",
		borderColor: "#8cb6b2",
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
