import React from "react";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";

const PaymentProcess3Kontostand = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <Row className={styles.head}>
          <Col md={{ span: 8, offset: 2 }}>
            <Breadcrumb className={styles.head}>
              <Breadcrumb.Item active>Auswahl prüfen</Breadcrumb.Item>
              <Breadcrumb.Item active>Informationen prüfen</Breadcrumb.Item>
              <Breadcrumb.Item active>Kauf abschließen</Breadcrumb.Item>
              <Breadcrumb.Item active>Buchungsbestätigung</Breadcrumb.Item>
              <Breadcrumb.Item active>Fahrt tracken</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Row className={styles.head}>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Fahrt tracken</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Image src="/map.png" alt="map img" width={850} height={250} />
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card className={styles.cardTracking}>
              <Card.Body>
                <Row>
                  <Col md={{ span: 10, offset: 1 }}>
                    <ProgressBar>
                      <ProgressBar variant="success" now={25} key={1} />
                    </ProgressBar>
                  </Col>
                </Row>
                <Row>
                  <Col md={{ span: 2, offset: 2 }}>
                    <span>Buchung</span>
                  </Col>
                  <Col md={{ span: 2 }}>
                    <span>Start</span>
                  </Col>
                  <Col md={{ span: 2 }}>
                    <span>Ziel</span>
                  </Col>
                  <Col md={{ span: 2 }}>
                    <span>Bestätigung</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <Card className={styles.cardTracking}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Text>Lieferung:</Card.Text>
                    <Card.Text>Monsera Pflanze</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{ span: 4 }}>
            <Card className={styles.cardTracking}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Text>Dein Fahrer:</Card.Text>
                    <Card.Text>Max Schneider</Card.Text>
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
