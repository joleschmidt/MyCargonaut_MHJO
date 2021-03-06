import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//components
import Navbar from "../components/Navbar";
import React from "react";

const Kaufen = () => {
	//Funktionen

	//HTML
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main className="container">
				{/*algin div center */}
				<h1 className={styles.title}>Hans Peter</h1>

				<div className={styles.grid}></div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Kaufen;
