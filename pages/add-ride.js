import React, { useState } from "react";
import Head from "next/head";
import {Form} from "react-bootstrap";
import DatePicker from "react-datepicker";

//components
import Navbar from "../components/Navbar";
import Button from "react-bootstrap/Button";
import firebase from "../firebase";
import Footer from "../components/Footer";
import "react-datepicker/dist/react-datepicker.css";
import SuccessModal from "../components/SuccessModal";

const Ride = () => {
	//Funktionen
	const [cartype, setCartype] = useState("default");
	const [startRide, setStartRide] = useState("");
	const [endRide, setEndRide] = useState("");
	const [passengerQuantity, setPassengerQuantity] = useState("default");
	const [priceRide, setPriceRide] = useState("");
	const [dateRide, setDateRide] = useState("");
	const [textRide, setTextRide] = useState("");
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);

	const addRideToFirestore = () => {
		if(startRide == "")
		firebase.firestore().collection("rides").add({
			startride: startRide,
			endride: endRide,
			passenger: passengerQuantity,
			price: priceRide,
			date: dateRide.toString(),
			car: cartype,
			text: textRide,
		});
	};

	const handleClick = () => {
		setStartRide('');
		setEndRide('');
		setPassengerQuantity('default');
		setPriceRide('');
		setDateRide('');
		setCartype('default');
		setTextRide('');
	};

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
				<div className="input-position mt-5">
					<div>
						<img
							src="/ride.svg"
							alt="SVG von Ware versenden"
							width="90%"
							height="90%"
						/>
					</div>
					<div className="d-flex flex-column justify-content-center">
						<div className="flex-row">
							<a
								className="nav-link d-flex justify-content-end link-style mb-2"
								href="/add-shipping"
							>
								<img
									src="/Vector.svg"
									alt="SVG send"
									width="3%"
									height="3%"
									className="send-icon-style"
								/>
								Speditionen veröffentlichen
							</a>
						</div>
						<Form>
							<input
								type="text"
								className="form-control input-styles mb-3"
								placeholder="Von"
								id="startRide"
								value={startRide}
								onChange={(e) => setStartRide(e.target.value)}
							/>
							<input
								type="text"
								className="form-control input-styles mb-3"
								placeholder="Nach"
								id="endRide"
								value={endRide}
								onChange={(e) => setEndRide(e.target.value)}
							/>
							<Form.Select
								className="input-styles mb-3"
								id="selectPassenger"
								value={passengerQuantity}
								onChange={(e) => setPassengerQuantity(e.target.value)}
							>
								<option value="default" disabled hidden>
									Anzahl möglicher Mitfahrer*innen
								</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</Form.Select>
							<div className="input-position">
								<input
									type="text"
									className="form-control input-styles space-right mb-3"
									placeholder="Preis"
									id="priceRide"
									value={priceRide}
									onChange={(e) => setPriceRide(e.target.value)}
								/>
									<DatePicker
										selected={dateRide}
										onChange={selectedDate => setDateRide(selectedDate)}
										dateFormat={'dd.MM.yyyy'}
										minDate={new Date()}
										className={'datepickerAdd form-control input-styles mb-3'}
										placeholderText={'Wann?'}
									/>
							</div>
							<Form.Select
								className="input-styles mb-3"
								id="selectCarride"
								value={cartype}
								onChange={(e) => setCartype(e.target.value)}
							>
								<option value="default" disabled hidden>
									Fahrzeug
								</option>
								<option value="VW">VW</option>
								<option value="BMW">BMW</option>
								<option value="Mercedes">Mercedes</option>
							</Form.Select>
							<textarea
								className="form-control input-styles mb-3"
								placeholder="Schreibe etwas..."
								id="textRide"
								value={textRide}
								onChange={(e) => setTextRide(e.target.value)}
							/>
						</Form>
						<div className="d-flex justify-content-center">
							<Button
								className="btn-style mt-4 mb-4"
								onClick={function (event){ addRideToFirestore(); handleClick(); handleShow()}}

							>
								veröffentlichen
							</Button>
						</div>
					</div>
				</div>
				<SuccessModal showModal={show} setShowModal={setShow} />
			</main>

			<Footer />
		</div>
	);
};

export default Ride;


