import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import firebase from "../firebase";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const PaymentProcess3Kontostand = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getUserFromFirestore();
  }, []);

  const getUserFromFirestore = () => {
    firebase
      .firestore()
      .collection("user")
      .onSnapshot((snapshot) => {
        const user = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUser(user);
      });
  };

  return (
    <main>
      <Navbar />
      <Container>
        <Row className={styles.head}>
          <Col>
            <Modal
              className={styles.modalPayment}
              show={show}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>Kontodaten</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Inhaber: MyCargonaut GmbH</p>
                <p>IBAN: DE15 245084 1122 0013</p>
                <p>BLZ: 3154359</p>
                <p>Verwendungszweck: cargonautjanschmidt13</p>
              </Modal.Body>
              <Modal.Footer>
                <p>
                  Um dein Guthaben aufzuladen sende den gewünschten Betrag an
                  die oben stehenden Kontodaten.
                </p>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>

        <Row className={styles.head}>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Mein Kontostand</h1>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card>
              <Card.Body>
                {user.map((user) => (
                  <div key={user.id}>
                    <Row>
                      <Col>
                        <Card.Text className={styles.guthaben}>
                          {user.bank} €
                        </Card.Text>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Image
                          className={styles.imgPaymentTree}
                          src="/invest.svg"
                          alt="money img"
                          width={230}
                          height={250}
                        />
                      </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                      <Col md="auto">
                        <Button
                          className={styles.btn}
                          type="button"
                          onClick={handleShow}
                        >
                          Konto aufladen
                        </Button>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </main>
  );
};

export default PaymentProcess3Kontostand;
