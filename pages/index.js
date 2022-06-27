import Image from "next/image";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCirclePlus,
	faMagnifyingGlass,
	faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
//bootstrap
import Button from "react-bootstrap/Button";
import {BrowserRouter as Router } from 'react-router-dom';
//components
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import {Col, Row} from "react-bootstrap";
import Footer from "../components/Footer";
import SignInModal from "../components/SignInModal";

const Home = () => {

	//functions
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);

	//CSS
	let style = {
		imageOne: {
			textAlign: 'center',
		},
		container: {
			backgroundColor: '#669D97',
			color: '#ffffff',
		},
		text: {
			textAlign: 'center',
		},
		row: {
			padding: 30,
		},
		column: {
			columnWidth: 30 + 'px',
		},
		info: {
			color: '#4F4F4F',
		},
		button: {
			border: 0 + 'px',
			borderRadius: 15 + 'px',
			backgroundColor: '#669D97',
			color: '#ffffff',
			paddingLeft: 35 + 'px',
			paddingRight:  35 + 'px',
		},
		infoCargo: {
			paddingLeft: 0 + 'px',
			paddingBottom: 50 + 'px',
			paddingTop: 50 + 'px',
		},
		colCargoImg: {
			paddingLeft: 140 + 'px',
			paddingTop: 50 + 'px',
		},
		iconStep: {
			padding: 20 + 'px',
		}
	}

	//HTML
	return (
		<main>
			<Navbar />
			<Col style={style.imageOne}>
				<Image src={'/10109.jpg'} alt={'man with phone in front of car'} width={650} height={380}/>
			</Col>

			<Search />
			<br/>
			<br/>

			<Row className={'container-fluid'}
				 style={style.container}>
				<Row style={style.row} >
					<Col className={'col-sm'}>
					</Col>

					<Col style={style.text}>
						<FontAwesomeIcon className={'icon fa-5x'}
										 icon={faMagnifyingGlass}
										 style={style.iconStep}/>
						<h5>Transportmöglichkeiten finden</h5>
						<p>Mit MyCargonaut kannst du einfach und unkompliziert und nachhaltig Waren versenden. Privatpersonen stellen dafür freien Laderaum bei Fahrten gegen ein Entgelt zur Verfügung.</p>
					</Col>

					<Col style={style.text}>
						<FontAwesomeIcon className={'icon fa-5x'}
										 icon={faCirclePlus}
										 style={style.iconStep}/>
						<br/>
						<h5>Fahrten anbieten</h5>
						<br/>
						<p>Werde zum*zur Cargonaut*in, indem du freie Plätze oder Ladefläche auf unserer Website veröffentlichst und so Wegstrecken nachhaltiger nutzt.</p>
					</Col>

					<Col style={style.text}>
						<FontAwesomeIcon className={'icon fa-5x'}
										 icon={faScaleBalanced}
										 style={style.iconStep}/>
						<br/>
						<h5>Bezahlung</h5>
						<br/>
						<p>Lade dein MyCargonaut-Konto ganz einfach über digitale Zahlungsdienste auf. Auf dieses Konto werden dir Einkünfte von Fahrten ebenfalls gutgeschrieben.</p>
					</Col>
					<Col className={'col-sm'}>
					</Col>
				</Row>
			</Row>

			<br/>

			<Row className={'container-fluid'}
				 style={style.info}>
				<Row>
					<Col style={style.colCargoImg}>
						<Image src={'/8401.jpg'}
							   height={320}
							   width={540}
							   alt={'man with laptop sitting'}/>
					</Col>
					<Col style={style.infoCargo}>
						<h5>So wirst du Cargonaut*in</h5>
						<br/>
						<Row>
							<Col className={'col-1'}>
								<h6>1.</h6>
							</Col>
							<Col>
								<p>Lege dein persönliches Konto an und erzähle uns etwas über dich.</p>
							</Col>
						</Row>
						<Row>
							<Col className={'col-1'}>
								<h6>2.</h6>
							</Col>
							<Col>
								<p>Inseriere deine nächste Fahrt oder Suche nach deiner optimalen Mitfahrgelegentheit oder Mitnahmemöglichkeit für deine Waren.</p>
							</Col>
						</Row>
						<Row>
							<Col className={'col-1'}>
								<h6>3.</h6>
							</Col>
							<Col>
								<p>Erhalte als Anbieter*in von Fahrten deine Bezahlung!</p>
							</Col>
						</Row>
						<br/>
						<Row>
							<Col className={'col-1'}>
							</Col>
							<Col>
								<Button style={style.button}
										onClick={handleShow}
								>jetzt starten</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</Row>

			<SignInModal showModal={show} setShowModal={setShow} />


			<Footer />
		</main>
	);
};

export default Home;
