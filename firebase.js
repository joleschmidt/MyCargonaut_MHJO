import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: "AIzaSyCUHQ4ax9t2oHgR7uUYhYcDtDO7ijLwP7A",
		authDomain: "my-cargonaut-25251.firebaseapp.com",
		projectId: "my-cargonaut-25251",
		storageBucket: "my-cargonaut-25251.appspot.com",
		messagingSenderId: "88557065969",
		appId: "1:88557065969:web:8f60ec9408acc0c3d97b50",
		measurementId: "G-KP2E3B09TS",
	});
}

// firebase.analytics();
const auth = firebase.auth();
export { auth };
export default firebase;
