import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import firebase from "../firebase";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { Card } from "react-bootstrap";

const PaymentProcess = () => {
  const router = useRouter();
  const [rides, setRide] = useState([]);

  useEffect(() => {
    getRideFromFirestore();
  }, []);

  const getRideFromFirestore = () => {
    firebase
      .firestore()
      .collection("rides")
      .onSnapshot((snapshot) => {
        const rides = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRide(rides);
      });
  };

  return (
    <main>
      <Navbar />
      <Container>
        <Row className={styles.head}>
          <Col md={{ span: 8, offset: 3 }}>
            <Breadcrumb className={styles.head}>
              <Breadcrumb.Item active>Auswahl prüfen</Breadcrumb.Item>
              <Breadcrumb.Item active>Informationen prüfen</Breadcrumb.Item>
              <Breadcrumb.Item active>Kauf abschließen</Breadcrumb.Item>
              <Breadcrumb.Item active>Buchungsbestätigung</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row className={styles.head}>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Deine Fahrt</h1>
          </Col>
        </Row>

        <div>
          {rides.map((rides) => (
            <div key={rides.id}>
              <Row>
                <Col md={{ span: 8, offset: 2 }}>
                  <Card>
                    <Card.Body>
                      <Row className={styles.inputPaymentTwo}>
                        <Col>
                          <Card.Title>{rides.startride}</Card.Title>
                        </Col>
                        <Col></Col>
                        <Col>
                          <Card.Title>{rides.endride}</Card.Title>
                        </Col>
                      </Row>

                      <Row className={styles.inputPaymentOne}>
                        <Col>
                          <Card.Text>Abfahrt:</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>13:00 Uhr</Card.Text>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                      </Row>

                      <Row className={styles.inputPaymentThree}>
                        <Col>
                          <Card.Text>Ankunft:</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>20:00 Uhr</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>Mitfahrer:</Card.Text>
                        </Col>

                        <Col>
                          <Card.Text>{rides.passenger}</Card.Text>
                        </Col>
                      </Row>
                      <Row className={styles.inputPaymentFour}>
                        <Col>
                          <Card.Text>Gesamtpreis</Card.Text>
                        </Col>

                        <Col md={{ span: 4 }}>
                          <Card.Text>{rides.price} €</Card.Text>
                        </Col>
                      </Row>
                      <Row className="justify-content-md-center">
                        <Col md="auto">
                          <Button
                            className={styles.btn}
                            type="button"
                            onClick={() => router.push("/paymentProcess1")}
                          >
                            Informationen prüfen
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </main>
  );
};

export default PaymentProcess;
