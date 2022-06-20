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
import { Image } from "react-bootstrap";



const PaymentProcess3Kontostand= () => {
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
								<Breadcrumb.Item active>Fahrt tracken</Breadcrumb.Item>
							</Breadcrumb>
						</Col>
					</Row>
                    <Row className={styles.head}>
						<Col md={{ span: 8, offset: 2 }}>
							<h1>Buchung abgeschlossen</h1>
						</Col>
					</Row>					

					<Row>
						<Col md={{ span: 8, offset: 2 }}>
						<Card border="secondary">							
							<Card.Body>
								<Row >
									<Col>
										<Card.Text className={styles.headFont}>Vielen Dank für die Buchung!</Card.Text>                                        
									</Col>
								</Row>							

								<Row>
									<Col>
										<Image className={styles.imgPaymentTree} src="/invest.svg" alt="money img" width={230} height={250} />
									</Col>
								</Row>

								<Row className="justify-content-md-center">
									<Col md="auto">
										<Button className={styles.btn} type="button" onClick={() => router.push('/trackDrive')}>Fahrt tracken</Button>
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

export default PaymentProcess3Kontostand;
