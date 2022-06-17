import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Navbar from "../components/Navbar";

import firebase from "../firebase";

const FcTemplate = () => {
	const [count, setCount] = useState(0);
	const [lists, setLists] = useState([]);
	const [user, setUser] = useState([]);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	//functions
	const handleIncrease = () => {
		setCount(count + 1);
	};
	const handleDecrease = () => {
		setCount(count - 1);
	};

	//triggers when site is mount
	useEffect(() => {
		setCount(0);
		getFromFirestore();
		getUserFromFirestore();
	}, []);

	//firebase
	const addToFirebase = () => {
		firebase.firestore().collection("notes").add({
			title: "Working",
			body: "This is to check the Integration is working",
			nr: Math.random(),
		});
	};

	const addUserToFirestore = () => {
		firebase.firestore().collection("user").add({
			first: firstName,
			last: lastName,
		});
	};

	const getFromFirestore = () => {
		firebase
			.firestore()
			.collection("notes")
			.onSnapshot((snapshot) => {
				const lists = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setLists(lists);
			});
	};

	const getUserFromFirestore = () => {
		firebase
			.firestore()
			.collection("user")
			.onSnapshot((snapshot) => {
				const user = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setUser(user);
			});
	};

	const deleteFromFirestore = (id) => {
		firebase.firestore().collection("notes").doc(id).delete();
	};

	const deleteUserFromFirestore = (id) => {
		firebase.firestore().collection("user").doc(id).delete();
	};

	const updateFirestore = (id, title, body) => {
		firebase.firestore().collection("notes").doc(id).update({
			title: title,
			body: body,
		});
	};

	return (
		<div className="container">
			<Navbar />
			<h3>functionalComponent_template</h3>
			<div className="m-2">
				<div>
					count is: <h2 className="text-primary">{count}</h2>
				</div>
				<Button className="btn-secondary me-3" onClick={handleIncrease}>
					increase count
				</Button>
				<Button className="btn-danger" onClick={handleDecrease}>
					decrease count
				</Button>
			</div>
			<div className="mt-5">
				<h4>Firebase</h4>
				<div>
					{lists.map((list) => (
						<div className="my-3" key={list.id}>
							<h5>{list.title}</h5>
							<p>{list.body}</p>
							<p>{list.nr}</p>
							<button
								className="btn-danger"
								onClick={() => deleteFromFirestore(list.id)}
							>
								Delete from Firestore
							</button>
						</div>
					))}
				</div>
				<Button onClick={addToFirebase}>Add to Firestore</Button>
				<div className="form-group mt-5">
					<h4>Add User from Intput to Firebase</h4>
					{user.map((user) => (
						<div className="my-3" key={user.id}>
							<h5>{user.first}</h5>
							<p>{user.last}</p>
							<button
								className="btn-danger"
								onClick={() => deleteUserFromFirestore(user.id)}
							>
								Delete from Firestore
							</button>
						</div>
					))}
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						className="form-control"
						id="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						className="form-control"
						id="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
					<button
						className="btn-primary mt-2"
						onClick={() => addUserToFirestore()}
					>
						Add to Firestore
					</button>
				</div>
			</div>
		</div>
	);
};

export default FcTemplate;
