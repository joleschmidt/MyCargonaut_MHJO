import React, { useContext, useState, useEffect } from "react";
import firebase, { auth } from "../firebase";

// @ts-ignore
export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState({
		first: "",
		last: "",
		age: "",
		image: "",
		email: "",
		uid: "",
	});

	const [currentUid, setCurrentUid] = useState(null);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(setCurrentUid);

		if (currentUid !== null) {
			getCurrentUser();
		}
	}, []);

	const getCurrentUser = async () => {
		await firebase
			.firestore()
			.collection("users")
			.doc(currentUid)
			.get()
			.then((doc) => {
				setUser({
					first: doc.data().first,
					last: doc.data().last,
					age: doc.data().age,
					image: doc.data().image,
					email: doc.data().email,
					uid: auth.currentUser.uid,
				});
			});
	};
	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {
	return useContext(AuthContext);
}
