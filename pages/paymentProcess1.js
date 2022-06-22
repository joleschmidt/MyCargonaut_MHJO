import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router';

//components
import Navbar from "../components/Navbar";
import React from "react";
import { Button, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { Card } from "react-bootstrap";

const PaymentProcess1 = () => {
	const router = useRouter()

	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar/>

			<main className="container">
				{/*algin div center */}
				<Container>
					<Row className={styles.head}>
						<Col md={{ span: 8, offset: 2 }}>
							<Breadcrumb className={styles.head}>
								<Breadcrumb.Item active>Auswahl prüfen</Breadcrumb.Item>
								<Breadcrumb.Item active>Informationen eingeben</Breadcrumb.Item>
								<Breadcrumb.Item active>Kauf abschließen</Breadcrumb.Item>
								<Breadcrumb.Item active>Buchungsbestätigung</Breadcrumb.Item>
							</Breadcrumb>
						</Col>
					</Row>
					<Row className={styles.head}>
						<Col md={{ span: 8, offset: 2 }}>
							<h1>Informationen eingeben</h1>
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 8, offset: 2 }}>
						<Card border="secondary">							
							<Card.Body>							
								<Row className={styles.inputPaymentFive}>
									<Col>
										<Card.Text>Marie Schmidt</Card.Text>
									</Col>
								</Row>

								<Row className={styles.inputPaymentFive}>								
									<Col>
										<Card.Text>schmidt@email.com</Card.Text>
									</Col>					
								</Row>
                                
								<Row className={styles.inputPaymentFive}>								
									<Col>
										<Card.Text>Bismarckstraße 45</Card.Text>
                                        <Card.Text>35478 Köln</Card.Text>
									</Col>					
								</Row>


								<Row className={styles.inputPaymentFour}>
									<Col>
										<Card.Text>Gesamtpreis</Card.Text>
									</Col>
									<Col md={{ span: 4 }}>
										<Card.Text>25,00€</Card.Text>
									</Col>
									<Col md={{ span: 4 }}></Col>
								</Row>

								<Row className="justify-content-md-center">
									<Col md="auto">
										<Button className={styles.btn} type="button" onClick={() => router.push('/paymentProcess2')}>Kauf abschließen</Button>
									</Col>
									
								</Row>
															
								
							</Card.Body>

						</Card>
						
						</Col>
					</Row>
				</Container>
	
			</main>

			<footer className={styles.footer}>
			
			</footer>
		</div>
	);
};

export default PaymentProcess1;

