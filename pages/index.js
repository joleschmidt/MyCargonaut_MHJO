import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCirclePlus,
	faMagnifyingGlass,
	faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
//bootstrap
import Button from "react-bootstrap/Button";
//components
import Navbar from "../components/Navbar";
import {Col, Form, Row} from "react-bootstrap";
import firebase from "../firebase";

const Home = () => {
	const [setShow] = useState(false);
	const handleShow = () => setShow(true);

	//Funktionen

	//HTML
	return (
		<main>
			<Navbar />

			<Col style={style.imageOne}>
				<Image src={'/10109.jpg'} alt={'man with phone in front of car'} width={650} height={380}/>
			</Col>
			<Col className={'container-fluid'}>
				<Row>
					<Col>
					</Col>

					<Col style={style.search}>
						<h5>Waren senden</h5>
						<br/>
						<Row>
							<Form>
								<Row style={{width: '900px'}}>
									<Col>
										<Form.Control type={'text'} placeholder={'Von'} style={style.input}/>
									</Col>
									<Col>
										<Form.Control type={'text'} placeholder={'Nach'} style={style.input}/>
									</Col>
									<Col>
										<Form.Select style={style.input}>
											<option>Was?</option>
											<option value="1">Fahrrad</option>
											<option value="2">Pakete</option>
											<option value="3">Möbelstücke</option>
										</Form.Select>
									</Col>
									<Col>
										<Form.Control type={'number'} placeholder={'Wann?'} style={style.input}/>
									</Col>
									<Col>
										<Button style={{backgroundColor: '#ffffff'}}>
											<FontAwesomeIcon onClick={doSearch} className={'icon'} icon={faMagnifyingGlass} style={style.searchButton}/>
										</Button>
									</Col>
								</Row>
							</Form>
						</Row>
					</Col>

					<Col>
					</Col>
				</Row>
			</Col>

			<br/>
			<br/>

			<Row className={'container-fluid'} style={style.container}>
				<Row style={style.row} >
					<Col className={'col-sm'}>
					</Col>

					<Col style={style.text}>
						<FontAwesomeIcon className={'icon fa-5x'} icon={faMagnifyingGlass} style={{padding: 20 + 'px'}}/>
						<h5>Transportmöglichkeiten finden</h5>
						<p>Mit MyCargonaut kannst du einfach und unkompliziert und nachhaltig Waren versenden. Privatpersonen stellen dafür freien Laderaum bei Fahrten gegen ein Entgelt zur Verfügung.</p>
					</Col>

					<Col style={style.text}>
						<FontAwesomeIcon className={'icon fa-5x'} icon={faCirclePlus} style={{padding: 20 + 'px'}}/>
						<br/>
						<h5>Fahrten anbieten</h5>
						<br/>
						<p>Werde zum*zur Cargonaut*in, indem du freie Plätze oder Ladefläche auf unserer Website veröffentlichst und so Wegstrecken nachhaltiger nutzt.</p>
					</Col>

					<Col style={style.text}>
						<FontAwesomeIcon className={'icon fa-5x'} icon={faScaleBalanced} style={{padding: 20 + 'px'}}/>
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

			<Row className={'container-fluid'} style={style.info}>
				<Row>
					<Col style={{paddingLeft: 140 + 'px', paddingTop: 50 + 'px'}}>
						<Image src={'/8401.jpg'} height={320} width={540} alt={'man with laptop sitting'}/>
 					</Col>
					<Col style={{paddingLeft: 0 + 'px', paddingBottom: 50 + 'px', paddingTop: 50 + 'px'}}>
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
							<Col className={'col-1'} style={{columnWidth: 30 + 'px'}}>
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
								<Button style={style.button} onClick={handleShow}>jetzt starten</Button>
							</Col>
						</Row>
						</Col>
					</Row>
				</Row>
		</main>
	);
};

export default Home;

let style = {
	imageOne: {
		textAlign: 'center',
	},
	imageTwo: {
	},
	search: {
		backgroundColor: '#669D97',
		color: '#ffffff',
		padding: 30,
		borderRadius: 15 + 'px',
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
	searchButton: {
		color: '#669D97',
		border: 0 + 'px',
		borderRadius: 15 + 'px'
	},
	input: {
		backgroundColor: '#A3C4C1',
		color: '#ffffff',
		border: 0 + 'px',
	},
}
