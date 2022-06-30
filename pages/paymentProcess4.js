import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";

const PaymentProcess3Kontostand = () => {
  const router = useRouter();

  return (
    <main>
      <Navbar />
      <Container>
        <Row className={styles.head}>
          <Col md={{ span: 8, offset: 2 }}>
            <Breadcrumb className={styles.head}>
              <Breadcrumb.Item active>Auswahl prüfen</Breadcrumb.Item>
              <Breadcrumb.Item active>Informationen pfüfen</Breadcrumb.Item>
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
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Text className={styles.headFont}>
                      Vielen Dank für die Buchung!
                    </Card.Text>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Image
                      className={styles.imgPaymentCar}
                      src="/10109.jpg"
                      alt="img"
                      width={350}
                      height={230}
                    />
                  </Col>
                </Row>

                <Row className="justify-content-md-center">
                  <Col md="auto">
                    <Button
                      className={styles.btn}
                      type="button"
                      onClick={() => router.push("/trackDrive")}
                    >
                      Fahrt tracken
                    </Button>
                  </Col>
                </Row>
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
