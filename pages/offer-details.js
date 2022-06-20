import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//components
import Navbar from "../components/Navbar";
import React from "react";
import {Row, Col} from "react-bootstrap";

const OfferDetails = () => {
    const pageBody = {
        width: "80%",
        display: "flex",
        alignItems: "center",
    }
    const arrowImg = {
        width: "30%",
        height: "30%",
    }
    return (
        <div className="container">
            <Navbar />
            <main>
                <dvi style={pageBody}>
                    <Row xs={12}>
                        <Col>
                            {/* Start City */}
                            <h2>Berlin</h2>
                        </Col>
                        <Col>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/800px-Arrow_east.svg.png?20071208091123"
                                 alt="arrow"
                                 style={arrowImg}/>
                        </Col>
                        <Col>
                            {/* Destination City */}
                            <h2>Köln</h2>
                        </Col>
                    </Row>
                    <Row xs={12}>
                        <Col xs={5}>
                            <p>Abfahrt:</p>
                        </Col>
                        <Col xs={7}>
                            <p>13.00 Uhr</p>
                            <p></p>
                        </Col>
                    </Row>
                </dvi>
            </main>
        </div>
    )
}

export default OfferDetails;