// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCUHQ4ax9t2oHgR7uUYhYcDtDO7ijLwP7A",
	authDomain: "my-cargonaut-25251.firebaseapp.com",
	projectId: "my-cargonaut-25251",
	storageBucket: "my-cargonaut-25251.appspot.com",
	messagingSenderId: "88557065969",
	appId: "1:88557065969:web:8f60ec9408acc0c3d97b50",
	measurementId: "G-KP2E3B09TS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
