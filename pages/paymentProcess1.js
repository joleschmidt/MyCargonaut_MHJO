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

const PaymentProcess1 = () => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [drive, setDrive] = useState([]);

  useEffect(() => {
    getUserFromFirestore();
    getRideFromFirestore();
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
              <Breadcrumb.Item active>Informationen prüfen</Breadcrumb.Item>
              <Breadcrumb.Item active>Kauf abschließen</Breadcrumb.Item>
              <Breadcrumb.Item active>Buchungsbestätigung</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row className={styles.head}>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Informationen prüfen</h1>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card>
              <Card.Body>
                {user.map((user) => (
                  <div key={user.id}>
                    <Row className={styles.inputPaymentFive}>
                      <Col>
                        <Card.Text>
                          {user.forname} {user.lastname}
                        </Card.Text>
                      </Col>
                    </Row>

                    <Row className={styles.inputPaymentFive}>
                      <Col>
                        <Card.Text>{user.email}</Card.Text>
                      </Col>
                    </Row>

                    <Row className={styles.inputPaymentFive}>
                      <Col>
                        <Card.Text>
                          {user.street} {user.streetnr}
                        </Card.Text>
                        <Card.Text>
                          {user.plz} {user.city}
                        </Card.Text>
                      </Col>
                    </Row>
                  </div>
                ))}

                {drive.map((drive) => (
                  <div key={drive.id}>
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
                          onClick={() => router.push("/paymentProcess2")}
                        >
                          Kauf abschließen
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

export default PaymentProcess1;
