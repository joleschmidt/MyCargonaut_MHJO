import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const SignInModal = (props) => {
	const { showModal, setShowModal } = props;

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	return (
		<div>
			<Modal style={styles.container} show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Sign In</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default SignInModal;

let styles = {
	container: {
		//backgroundColor: "#f5f5",
	},
};
