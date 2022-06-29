import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

//components
import Navbar from "../components/Navbar";
import Button from "react-bootstrap/Button";
import firebase from "../firebase";
import Footer from "../components/Footer";
import "react-datepicker/dist/react-datepicker.css";
import SuccessModal from "../components/SuccessModal";


const Shipping = () => {
	//Funktionen
	const [cartype, setCartype] = useState("default");
	const [startShipping, setStartShipping] = useState("");
	const [endShipping, setEndShipping] = useState("");
	const [speditionstype, setSpeditionstype] = useState("default");
	const [shippingSize, setShippingSize] = useState("");
	const [shippingWeight, setShippingWeight] = useState("");
	const [priceShipping, setPriceShipping] = useState("");
	const [dateShipping, setDateShipping] = useState("");
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);

	const addShippingToFirestore = () => {
		firebase.firestore().collection("shippings").add({
			start: startShipping,
			end: endShipping,
			typeSpedition: speditionstype,
			size: shippingSize,
			weight: shippingWeight,
			price: priceShipping,
			date: dateShipping.toString(),
			car: cartype,
		});
	};
	const handleClick = () => {
		setStartShipping('');
		setEndShipping('');
		setSpeditionstype('default');
		setShippingSize('');
		setShippingWeight('');
		setPriceShipping('');
		setDateShipping('');
		setCartype('default');
	};

	//HTML
	return (
		<div>
			<Navbar />
			<main className="container" style={{ marginBottom: "90px" }}>
				<div className="container">
					<div className="input-position mt-5">
						<div className="d-flex flex-column justify-content-center">
							<div className="flex-row">
								<a
									className="nav-link d-flex justify-content-end link-style mb-2"
									href="/add-ride"
								>
									<img
										src="/Vector.svg"
										alt="SVG send"
										width="3%"
										height="3%"
										className="send-icon-style"
									/>
									Fahrt veröffentlichen
								</a>
							</div>
							<Form>
								<input
									type="text"
									className="form-control input-styles mb-3"
									placeholder="Von"
									id="startShipping"
									value={startShipping}
									onChange={(e) => setStartShipping(e.target.value)}
								/>
								<input
									type="text"
									className="form-control input-styles mb-3"
									placeholder="Nach"
									id="endShipping"
									value={endShipping}
									onChange={(e) => setEndShipping(e.target.value)}
								/>
								<Form.Select
									className="input-styles mb-3"
									id="selectSpedition"
									value={speditionstype}
									onChange={(e) => setSpeditionstype(e.target.value)}
								>
									<option value="default" disabled hidden>
										Ware
									</option>
									<option value="1">Paket</option>
									<option value="2">Möbel</option>
									<option value="3">Elektronik</option>
								</Form.Select>
								<div className="input-position">
									<input
										type="text"
										className="form-control input-styles space-right mb-3"
										placeholder="max. Maße"
										id="shippingSize"
										value={shippingSize}
										onChange={(e) => setShippingSize(e.target.value)}
									/>
									<input
										type="text"
										className="form-control input-styles mb-3"
										placeholder="max. Gewicht"
										id="shippingWeight"
										value={shippingWeight}
										onChange={(e) => setShippingWeight(e.target.value)}
									/>
								</div>
								<div className="input-position">
									<input
										type="text"
										className="form-control input-styles space-right mb-3"
										placeholder="Preis"
										id="priceShipping"
										value={priceShipping}
										onChange={(e) => setPriceShipping(e.target.value)}
									/>
									<DatePicker
										selected={dateShipping}
										onChange={selectedDate => setDateShipping(selectedDate)}
										dateFormat={'dd.MM.yyyy'}
										minDate={new Date()}
										className={'datepickerAdd input-styles'}
										placeholderText={'Wann?'}
									/>
								</div>
								<Form.Select
									className="input-styles mb-3"
									id="selectCar"
									value={cartype}
									onChange={(e) => setCartype(e.target.value)}
								>
									<option value="default" disabled hidden>
										Fahrzeug
									</option>
									<option value="1">VW</option>
									<option value="2">BMW</option>
									<option value="3">Mercedes</option>
								</Form.Select>
							</Form>
							<div className="d-flex justify-content-center">
								<Button
									className="btn-style mt-4 mb-4"
									onClick={function (event){ addShippingToFirestore(); handleClick(); handleShow()}}
								>
									veröffentlichen
								</Button>
							</div>
						</div>
						<div>
							<img
								src="/delivery.svg"
								alt="SVG von Ware versenden"
								width="90%"
								height="90%"
							/>
						</div>
					</div>
				</div>
				<SuccessModal showModal={show} setShowModal={setShow} />
			</main>

			<Footer />
		</div>
	);
};

export default Shipping;
