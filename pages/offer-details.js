//components
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import firebase from "../firebase";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import { BsFillChatTextFill } from "react-icons/bs";

const OfferDetails = () => {
	const router = useRouter();
	const offerId = router.query.id;
	console.log("URL offerId: ", offerId);
	const offerType = router.query.offerType;
	console.log("URL offerType: ", offerType);

	const [result, setResult] = useState([]);
	let rideOffer = {};

	//triggers when site is mount
	useEffect(() => {
		getOfferFromFirestore(offerId);
		getUserFromFireStore();
	}, []);

	// Get single offer to display details
	const getOfferFromFirestore = (offerId) => {
		if (offerType === true) {
			firebase
				.firestore()
				.collection("rides")
				.doc(offerId)
				.onSnapshot((snapshot) => {
					const result = snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}));
					setResult(result);
					console.log(result);
				});
			console.log("Result: ", rideOffer);
		} else {
			firebase
				.firestore()
				.collection("shippings")
				.doc(offerId)
				.get()
				.then((snapshot) => {
					rideOffer = snapshot.data();
					setResult(rideOffer);
				})
				.catch((err) => console.log(err));
			console.log("Result: ", rideOffer);
		}
	};
	const getUserFromFireStore = () => {};

	const openChat = () => {
		console.log("Open Chat with User: ", user.id);
	};

	const offer = {
		id: "d30i1",
		startride: "Berlin",
		endride: "Frankfurt",
		price: "30",
		startAddress: "Kaiserstraße 3",
		destinationAddress: "Römer Gasse 144",
		startTime: "10",
		arrivalTime: "21",
		offerUserId: "39hw3",
		date: "30.06.2022",
		text:
			"Ich fahre zurück in die Heimat. Da mein Freund leider verhindert ist, fahre ist diesmal leider aleine. Falls du auch in die Richtung muss, nehme ich gerne bis zu 3 Personen mit." +
			"Da ich Einiges mitnehmen muss, ist der Kofferraum schon recht voll. Bitte nur Handgepäck mitnehmen. Wenn noch Fragen sind, schreib mir einfach!",
		car: "BMW",
		passenger: 3,
	};
	const user = {
		id: "39hw3",
		firstName: "Lili",
		lastName: "Schmitt",
		age: "26",
		feedbackCount: "19",
		feedbackAvg: "4,7",
	};

	//Styling
	const priceRow = {
		width: "70%",
		backgroundColor: "#005B52",
		opacity: "80%",
		borderRadius: "15px",
		color: "white",
		padding: "10px",
		margin: "10px",
	};
	const offerRow = {
		marginTop: "10px",
	};
	const arrowImg = {
		width: "30%",
		height: "30%",
	};
	const userImg = {
		width: "80px",
		height: "80px",
		borderRadius: "15px",
		objectFit: "cover",
	};
	const carImg = {
		width: "70px",
		height: "70px",
		objectFit: "cover",
		borderRadius: "5px",
	};
	const bookingBtn = {
		width: "60%",
		borderRadius: "15px",
		backgroundColor: "#005B52",
	};
	const chatIcon = {
		fontSize: "25px",
		color: "#005B52",
		marginLeft: "60px",
	};

	// HTML
	return (
		<div>
			<Navbar />
			<main>
				<div
					className="justify-content-md-center"
					style={{ marginBottom: "20px" }}
				>
					{/*Drive Start City & Destination*/}
					<Row
						className="justify-content-md-center"
						style={{ marginTop: "10px", marginRight: "15px" }}
					>
						{/*/!*Start City*!/*/}
						{/*<Col className="text-end" style={{paddingTop: "10px"}}>*/}
						{/*    <h2>{offer.startride}</h2>*/}
						{/*</Col>*/}
						{/*/!*Arrow Img*!/*/}
						{/*<Col style={{display: "flex", alignItems: "center", justifyContent: "center"}}>*/}
						{/*    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/800px-Arrow_east.svg.png?20071208091123"*/}
						{/*         alt="arrow"*/}
						{/*         style={arrowImg}/>*/}
						{/*</Col>*/}
						{/*/!*Destination City*!/*/}
						{/*<Col style={{paddingTop: "10px"}}>*/}
						{/*    <h2>{offer.endride}</h2>*/}
						{/*</Col>*/}
					</Row>
					{/*Offer Price*/}
					<Row className="justify-content-md-center" style={offerRow}>
						<div style={priceRow}>
							<Row>
								{/*Offer for 1 Person*/}
								<Col className="text-center" style={{ paddingTop: "13px" }}>
									<p>
										Gesamtpreis für <strong> 1 </strong> Person
									</p>
								</Col>
								{/*Offer Price*/}
								<Col className="text-center" style={{ paddingTop: "10px" }}>
									<h2>
										<strong>{offer.price},00€</strong>
									</h2>
								</Col>
							</Row>
						</div>
					</Row>
					{/* Start Ride Time & Address*/}
					<Row className="justify-content-md-center" style={offerRow}>
						<Col className="col-4" style={{ textAlign: "end" }}>
							<Row>
								<p>
									<strong>Start</strong>
								</p>
							</Row>
						</Col>
						<Col className="col-8" style={{ paddingLeft: "40px" }}>
							<Row>
								<p>{offer.startride}</p>
							</Row>
						</Col>
					</Row>
					{/* Destination Ride Time & Address*/}
					<Row className="justify-content-md-center" style={offerRow}>
						<Col className="col-4" style={{ textAlign: "end" }}>
							<Row>
								<p>
									<strong>Ziel</strong>
								</p>
							</Row>
						</Col>
						<Col className="col-8" style={{ paddingLeft: "40px" }}>
							<Row>
								<p>{offer.endride}</p>
							</Row>
						</Col>
					</Row>

					<Row className="justify-content-md-center" style={offerRow}>
						<hr style={{ width: "60%", height: "5px", color: "#005B52" }} />
					</Row>

					<Row className="justify-content-md-center" style={offerRow}>
						{/*User Photo*/}
						<Col
							style={{ width: "30%", display: "flex", justifyContent: "right" }}
						>
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzQrtQGEuLsPktS09w7j-GIl7Pcequ4XOr7ugcW2Akd5rRs38TKMOiv6qeo2Di_1pf8&usqp=CAU"
								alt="avatar"
								style={userImg}
							/>
						</Col>
						{/*User Name, Feedback, Description, Car, Seats*/}
						<Col style={{ paddingLeft: "40px" }}>
							{/*User Name*/}
							<Row>
								<h4 style={{ color: "#005B52" }}>
									<strong>{user.firstName}</strong>
								</h4>
							</Row>
							{/*Feedback*/}
							<Row>
								{/*Feedback Average*/}
								<p>
									{user.feedbackAvg} / 5.0 - {user.feedbackCount} Bewertungen
								</p>
							</Row>
							{/*Description*/}
							<Row>
								<p>{offer.text}</p>
							</Row>
							<Row className="justify-content-md-center" style={offerRow}>
								<hr style={{ color: "#005B52" }} />
							</Row>
							{/*Car*/}
							<Row style={{ marginTop: "10px" }}>
								{/*Car Photo*/}
								<Col className="col-4">
									<img
										src="https://images.prismic.io/shacarlacca/NjQwNGM3MzYtZGMwNy00ZjE1LTljMzYtNGRkYTVkNWIwMzcz__10.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C900&w=1200&h=1200"
										alt="carImg"
										style={carImg}
									/>
								</Col>
								{/*Car Name & Seats*/}
								<Col
									className="col-8"
									style={{
										textAlign: "start",
										marginLeft: "10px",
										width: "50%",
									}}
								>
									<Row>
										<h5>
											<strong>{offer.car}</strong>
										</h5>
										<br />
										<p>Sitze: {offer.passenger}</p>
									</Row>
								</Col>
							</Row>
							<Row
								className="justify-content-md-center"
								style={{ marginTop: "40px", marginBottom: "40px" }}
							>
								<Button style={bookingBtn}>Fahrt buchen</Button>
							</Row>
						</Col>
						{/*Chat Icon*/}
						<Col className="align-content-center">
							<p style={chatIcon} onClick={() => openChat()}>
								<BsFillChatTextFill />
							</p>
						</Col>
					</Row>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default OfferDetails;
