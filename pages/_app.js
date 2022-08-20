import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

// auth
import AuthProvider from "../context/AuthContext";
import firebase from "firebase";

import React, { useState, useEffect } from "react";
import { User } from "../components/class/user";

const AuthContext = React.createContext();

export function useAuth() {
	return React.useContext(AuthContext);
}

function MyApp({ Component, pageProps }) {
	const [currentUser, setCurrentUser] = React.useState({});
	const [reviews, setReviews] = useState([]);
	let user = new User();
	const [userData, setUserData] = useState({
		first: "",
		last: "",
		age: "",
		image: "",
		email: "",
	});
	const value = { currentUser, userData, reviews };

	React.useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			setCurrentUser(user);
			getCurrentUser();
			getReviews();
		});
		return unsubscribe;
	}, []);

	//get current snapshot user from firestore and set user state
	const getCurrentUser = () => {
		firebase
			.firestore()
			.collection("users")
			.doc(firebase.auth().currentUser.uid)
			.get()
			.then((doc) => {
				setUserData({
					first: doc.data().first,
					last: doc.data().last,
					age: doc.data().age,
					image: doc.data().image,
					email: doc.data().email,
				});
			});
	};

	const getReviews = async () => {
		await firebase
			.firestore()
			.collection("reviews")
			.where("user", "==", firebase.auth().currentUser.uid)
			.onSnapshot((snapshot) => {
				const review = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setReviews(review);
			});
	};

	return (
		<AuthContext.Provider value={value}>
			<Component {...pageProps} />
		</AuthContext.Provider>
	);
}

export default MyApp;
