//components
import Navbar from "../components/Navbar";
import React from "react";
import {Card, Row, Col} from "react-bootstrap";
import {useState} from "react";
import firebase from "../firebase";
import Search from "../components/Search";
import {BrowserRouter as Router} from "react-router-dom";

const SearchResults = (props) => {
    // const searchResults = props.state;

    let listResult = [
        {
            id: 1,
            startTime: '13',
            arrivalTime: '20',
            price: '15',
            car: 'VW Golf',
            name: 'Max',
            passengers: 3,
        },
        {
            id: 2,
            startTime: '6',
            arrivalTime: '15',
            price: '25',
            car: 'BMW',
            name: 'Tom',
            passengers: 3,
        },
        {
            id: 3,
            startTime: '10',
            arrivalTime: '21',
            price: '30',
            car: 'Kia',
            name: 'Mathilda',
            passengers: 2,
        },
    ];

    //Styling
    const inputFields = {
        width: "80%",
        margin: "10px",
        background: "#005B52",
        backgroundColor: "#005B52",
        opacity: "70%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    }
    const searchBar = {
        padding: "10px",
        justifyContent: "center",
    }
    const resultsDiv = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const cardEntry = {
        width: "94%",
        height: "150px",
        margin: "10px",
        borderColor: "#005B52",
        borderRadius: "15px",
        display: "flex",
    }
    const colStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const userImg = {
        width: "100px",
        height: "100px",
        borderRadius: "15px",
    }
    return (
        <Router>
            <div className="container">
                <Navbar/>

                <main>
                    <div style={searchBar} className="inputFields">
                        {/* Import Search Component */}
                        <Search />
                    </div>

                    <div style={resultsDiv} className="results">
                        {listResult.map(entry => {
                            return (
                                <Card key={entry.id} style={cardEntry}>
                                    <Card.Body>
                                        <Row>
                                            <Col style={colStyle}>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzQrtQGEuLsPktS09w7j-GIl7Pcequ4XOr7ugcW2Akd5rRs38TKMOiv6qeo2Di_1pf8&usqp=CAU"
                                                     alt="avatar"
                                                     style={userImg}/>
                                                {/* {entry.userName} */}
                                                <p>{entry.name}</p>
                                            </Col>
                                            <Col style={colStyle}>
                                                <Row>
                                                    {/* {entry.startTime} */}
                                                    <p>Abfahrt: {entry.startTime} Uhr</p>
                                                    <br/>
                                                    {/* {entry.arrivalTime} */}
                                                    <p>Ankunft: {entry.arrivalTime} Uhr</p>
                                                </Row>
                                            </Col>
                                            <Col style={colStyle}>
                                                <Row>
                                                    {/* {entry.car} */}
                                                    <p>Auto: {entry.car}</p>
                                                    <br/>
                                                    {/* {entry.passengers} */}
                                                    <p>Sitze: {entry.passengers}</p>
                                                </Row>
                                            </Col>
                                            <Col style={colStyle}>
                                                {/* {entry.price} */}
                                                <h4>{entry.price}€</h4>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
                </main>

            </div>
        </Router>
    )
}

export default SearchResults;