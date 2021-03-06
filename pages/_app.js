import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-svg-core/styles.css'

// auth
import { AuthProvider } from "../context/AuthContext";


import React, { useState } from "react";

function MyApp({ Component, pageProps }) {
	  const [currentUser, setCurrentUser] = useState(null);

  return (
		<AuthProvider value={{ currentUser }}>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
