import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
