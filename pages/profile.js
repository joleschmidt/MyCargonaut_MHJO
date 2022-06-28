import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

//components
import Navbar from "../components/Navbar";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewModal from "../components/ReviewModal";
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";

const Profil = () => {
	//Funktionen

	const [showReview, setShowReview] = useState(false);
	const handleShowReview = () => setShowReview(true);
	//HTML
	return (
		<div className="m-0">
			<Navbar />
			<main>
				{/*algin div center T*/}
				<div className="container flex-column" style={styles.profileInfo}>
					<div className="row justify-content-center m-3">
						<img
							className="rounded-circle  col-sm-auto"
							src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
							alt="Profilbild"
							width="300"
							height="300"
							style={styles.profileImg}
						/>
					</div>
					<div className="d-flex flex-row justify-content-center align-items-center">
						<h2 style={styles.name}>Hans Peter</h2>
						<a href="/paymentProcess">
							<FontAwesomeIcon
								className="icon"
								icon={faCog}
								style={styles.cog}
							/>
						</a>
					</div>
					<h3 style={styles.age}>43 Jahre</h3>
					<hr style={styles.border} />
					<div
						style={styles.about}
						className="d-flex flex-column align-items-center"
					>
						<p style={styles.aboutTitle}>Über Hans</p>
						<p style={styles.aboutText} className="text-center">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum.
						</p>
					</div>
				</div>
			</main>
			<div
				style={styles.cars}
				className="d-flex flex-column align-items-center "
			>
				<h3 style={styles.carTitle}>Fahrzeuge</h3>
				<div className="d-flex align-items-center ">
					<div style={styles.carContainer} className="d-flex flex-row">
						<img
							src="https://imgr1.auto-motor-und-sport.de/H-R-Porsche-911-Typ-992--169Gallery-7da413ff-1779394.jpg"
							alt="Porsche 991"
							width="300"
							height="300"
							// @ts-ignore
							style={styles.carImg}
						/>
						<div style={styles.carCard}>
							<h4 style={styles.carName}>Porsche 991</h4>
							<p style={styles.carInfo}>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat, sed diam voluptua. At vero eos et accusam et
								justo duo dolores et ea rebum.
							</p>
						</div>
					</div>
					<div style={styles.carContainer} className="d-flex flex-row">
						<img
							src="https://imgr1.auto-motor-und-sport.de/H-R-Porsche-911-Typ-992--169Gallery-7da413ff-1779394.jpg"
							alt="Porsche 991"
							width="300"
							height="300"
							// @ts-ignore
							style={styles.carImg}
						/>
						<div style={styles.carCard}>
							<h4 style={styles.carName}>Porsche 991</h4>
							<p style={styles.carInfo}>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat, sed diam voluptua. At vero eos et accusam et
								justo duo dolores et ea rebum.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				style={styles.reviews}
				className=" d-flex flex-column align-items-center"
			>
				<h3 style={styles.reviewTitle}>Bewertungen</h3>
				<Button onClick={handleShowReview}>Bewerten</Button>
			</div>
			<ReviewModal
				showReviewModal={showReview}
				setReviewModal={setShowReview}
			/>
			<div>
			</div>
			<Footer />
		</div>
	);
};

export default Profil;

let styles = {
	about: {},
	aboutText: {
		color: "#4F4F4F",
		marginTop: "-15px",
		width: "516px",
	},
	aboutTitle: {
		color: "#005B52",
		fontSize: "22px",
		fontWeight: "bold",
	},
	age: {
		color: "#8E8D8D",
		fontSize: "24px",
		fontWeight: "bold",
		marginTop: "-8px",
	},
	border: {
		border: "1px solid #659e98",
		width: "516px",
	},
	cars: {
		marginTop: "60px",
		height: "445px",
		width: "100vw",
		backgroundColor: "#659e98",
	},
	carCard: {
		width: "400px",
		backgroundColor: "#fff",
		borderRadius: "15px",
		padding: "15px",
	},
	carContainer: {
		marginTop: "20px",
		width: "572px",
		borderRadius: "15px",
		backgroundColor: "#fff",
		marginLeft: "40px",
		marginRight: "40px",
	},
	carImg: {
		borderRadius: "15px 0px 0px 15px",
		objectFit: "cover",
	},
	carName: {},
	carTitle: {
		color: "#FFFFFF",
		fontSize: "32px",
		fontWeight: "bold",
		marginTop: "20px",
	},
	cog: {
		marginLeft: "10px",
		width: "25px",
		height: "auto",
		color: "#669d97",
	},
	container: {
		width: "100vw",
	},
	name: {
		fontSize: "32px",
		fontWeight: "bold",
	},
	profileImg: {},
	profileInfo: {
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
		height: "90vh",
		width: "100vw",
	},
	reviews: {
		height: "90vh",
	},
	reviewTitle: {
		fontSize: "32px",
		fontWeight: "bold",
		marginTop: "20px",
	},
};
