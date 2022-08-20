import React from "react";
import firebase from "firebase";

const AuthContext = React.createContext();

export function useAuth() {
	return React.useContext(AuthContext);
}

function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = React.useState({});
	const value = { currentUser };

	React.useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			setCurrentUser(user);
		});
		return unsubscribe;
	}, []);

	return;
	<AuthContext.Provider value={value} />;
}

export default AuthProvider;
