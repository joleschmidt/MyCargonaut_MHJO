import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import firebase, { auth } from "../firebase";

const ReviewModal = (props) => {
	const { showReviewModal, setReviewModal } = props;
	const handleCloseReview = () => setReviewModal(false);
	const [rating, setRating] = useState(0); // initial rating value
	const [title, setTitle] = useState("");
	const [review, setReview] = useState("");

	// Catch Rating value
	const handleRating = (rate) => {
		setRating(rate);
	};

	//add review to firebase firestore
	const handleReview = (event) => {
		event.preventDefault();
		if (review !== "") {
			firebase
				.firestore()
				.collection("reviews")
				.add({
					title: title,
					review: review,
					rating: rating,
					user: auth.currentUser.uid,
					date: new Date(),
				})
				.then(() => {
					setReviewModal(false);
					setTitle("");
					setReview("");
					setRating(0);
					handleCloseReview();
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};
	return (
		<div>
			<Modal
				style={styles.container}
				show={showReviewModal}
				onHide={handleCloseReview}
				centered
			>
				<Modal.Header closeButton style={styles.modalCenter}>
					<Modal.Title style={styles.loginTitle} className="ms-auto">
						Bewertung
					</Modal.Title>
				</Modal.Header>
				<Modal.Body style={styles.modalCenter}>
					<form>
						<Rating
							showTooltip
							tooltipArray={["Terrible", "Bad", "Average", "Great", "Prefect"]}
							onClick={handleRating}
							ratingValue={rating}
							allowHover={false}
							fillColor="#659e98"
						/>

						<input
							value={title}
							type="text"
							placeholder="Titel"
							style={styles.textInput}
							className="form-control"
							autoFocus
							required
							onChange={(e) => setTitle(e.target.value)}
						/>
						<textarea
							value={review}
							placeholder="Bewertung"
							style={styles.textAreaInput}
							className="form-control"
							autoFocus
							required
							onChange={(e) => setReview(e.target.value)}
						/>

						<hr style={styles.border} />
						<Button
							variant="primary"
							style={styles.sendBtn}
							onClick={handleReview}
						>
							absenden
						</Button>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ReviewModal;
let styles = {
	aReg: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "10px",
	},
	border: {
		border: "1px solid #659e98",
		marginTop: "30px",
	},
	container: {
		borderRadius: "15px !important",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
	},
	textAreaInput: {
		height: "150px",
		width: "456px",
		borderRadius: "15px",
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
	sendBtn: {
		height: "55px",
		width: "456px",
		borderRadius: "15px",
		borderWidth: "0px",
		backgroundColor: "#659e98",
		marginTop: "20px",
		marginBottom: "30px",
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
