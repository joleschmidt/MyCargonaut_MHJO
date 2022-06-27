//components
import Navbar from "../components/Navbar";
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {faHandsBubbles} from "@fortawesome/free-solid-svg-icons";

const OfferDetails = (props) => {

    const offer = {
        start: "Berlin",
        destination: "Frankfurt",
        price: "20",
        passengers: 1,
        startAddress: "Kaiserstraße 3",
        destinationAddress: "Römer Gasse 144",
        startTime: "10",
        arrivalTime: "18",
        offerUserId: "391h03",
        offerUserName: "Valentin",
        information: "Hey, würde mich freuen, wenn jemand mitkommen würde!",
        car: "Audi",
        seats: 3
    };

    const openChat = () => {
        console.log('Open Chat.');
    }
    //Styling
    const container = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const pageBody = {
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const priceRow = {
        width: "70%",
        backgroundColor: "#005B52",
        opacity: "80%",
        borderRadius: "15px",
        color: "white",
        padding: "10px",
        margin: "10px",
    }
    const arrowImg = {
        width: "30%",
        height: "30%",
    }
    const userImg = {
        width: "60px",
        height: "60px",
        borderRadius: "15px",
    }
    const carImg = {
        width: "40px",
        height: "40px",
        borderRadius: "5px",
    }
    const rideInfos = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <div className="container" style={{margin: "10px"}}>
            <Navbar />
            <div style={pageBody}>
                <Container className="rideInfos">
                    <Row style={{margin: "10px"}} className="justify-content-md-center">
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

                    <div style={priceRow}>
                        <Row className="justify-content-md-center">
                            <Col style={{display: "flex", alignItems: "center", justifyContent: "left", paddingLeft: "30px"}}>
                                <p>Gesamtpreis für <strong>1</strong> Person</p>
                            </Col>
                            <Col style={{display: "flex", alignItems: "center", justifyContent: "right", paddingRight: "30px"}}>
                                <h2>25,00€</h2>
                            </Col>
                        </Row>
                    </div>

                    <Row style={{margin: "10px"}} className="justify-content-md-center">
                        <Col>
                            <p>Abfahrt:</p>
                        </Col>
                        <Col>
                            <Row>
                                <p>13.00 Uhr</p>
                                <p>Adresse</p>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{margin: "15px"}} className="justify-content-md-center">
                        <Col>
                            <p>Ankunft:</p>
                        </Col>
                        <Col>
                            <Row>
                                <p>20.00 Uhr</p>
                                <p>Adresse</p>
                            </Row>
                        </Col>
                    </Row>

                    <hr style={{width: "70%", height: "5px", color: "#005B52"}}/>

                    <Row style={{margin: "15px"}} className="justify-content-md-center">
                        <Col className="col-3" style={{width: "30%", display: "flex", justifyContent: "left"}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzQrtQGEuLsPktS09w7j-GIl7Pcequ4XOr7ugcW2Akd5rRs38TKMOiv6qeo2Di_1pf8&usqp=CAU"
                                 alt="avatar"
                                 style={userImg}
                            />
                        </Col>
                        <Col className="col-7" style={{width: "50%"}}>
                            {/* {entry.userName} */}
                            <p>Selina</p>
                            {/* entry.feedback.length */}
                            <p>4.9 / 5.0 - 23 Bewertungen</p>
                            <br/>
                            <p>
                                Hey, ich fahre am 25.06.2022 wieder zurück in die Heimat und würde mich über 1-3
                                MitfahrerInnen freuen. Also falls Interesse besteht und noch Fragen offen sind,
                                einfach anschreiben!
                                Fahre einen BMW 1er und würde euch bitten nur Handgepäck mitzunehmen.
                                LG Selina
                            </p>

                            <hr style={{color: "#005B52"}}/>

                            <img src="https://images.prismic.io/shacarlacca/NjQwNGM3MzYtZGMwNy00ZjE1LTljMzYtNGRkYTVkNWIwMzcz__10.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C900&w=1200&h=1200"
                                 alt="carImg"
                                 style={carImg}
                            />
                            <h6>BMW</h6>
                            <br/>
                            <p>Sitze: 3</p>
                        </Col>
                        <Col className="col-2" style={{width: "20%", justifyContent: "flex-end"}}>
                            <FontAwesomeIcon className="icon" icon={faHandsBubbles} onClick={() => openChat()}/>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default OfferDetails;