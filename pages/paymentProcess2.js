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

const PaymentProcess2 = () => {
  const router = useRouter();
  const [drive, setDrive] = useState([]);

  useEffect(() => {
    getRideFromFirestore();
  }, []);

  const getRideFromFirestore = () => {
    firebase
      .firestore()
      .collection("drive")
      .onSnapshot((snapshot) => {
        const drive = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDrive(drive);
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
              <Breadcrumb.Item active>Informationen pfüfen</Breadcrumb.Item>
              <Breadcrumb.Item active>Kauf abschließen</Breadcrumb.Item>
              <Breadcrumb.Item active>Buchungsbestätigung</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row className={styles.head}>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Kauf abschließen</h1>
          </Col>
        </Row>

        <div>
          {drive.map((drive) => (
            <div key={drive.id}>
              <Row>
                <Col md={{ span: 8, offset: 2 }}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col>
                          <Card.Text className={styles.guthaben}>
                            +30,00€
                          </Card.Text>
                        </Col>
                      </Row>

                      <Row className={styles.inputPaymentFour}>
                        <Col>
                          <Card.Text>Gesamtpreis</Card.Text>
                        </Col>

                        <Col md={{ span: 4 }}>
                          <Card.Text>{drive.price} €</Card.Text>
                        </Col>
                      </Row>

                      <Row className="justify-content-md-center">
                        <Col md="auto">
                          <Button
                            className={styles.btn}
                            type="button"
                            onClick={() => router.push("/paymentProcess4")}
                          >
                            Jetzt mit Guthaben zahlen
                          </Button>
                        </Col>
                      </Row>
                      <Row className="justify-content-md-center">
                        <Col md="auto">
                          <Button
                            className={styles.btnKonto}
                            variant="link"
                            onClick={() =>
                              router.push("/paymentProcess3Kontostand")
                            }
                          >
                            Konto aufladen
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

export default PaymentProcess2;
