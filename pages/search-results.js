import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//components
import Navbar from "../components/Navbar";
import React from "react";
import {Card, Row, Col, Form, FormControl, InputGroup} from "react-bootstrap";
import state from "../next.config";
import {useState} from "react";
import firebase from "../firebase";

const SearchResults = () => {
    const [lists, setLists] = useState([]);
    function handleChange(evt) {
        const value = evt.target.value;
        setLists({
            ...state,
            [evt.target.start]: value,
            [evt.target.destination]: value,
            [evt.target.counter]: value,
            [evt.target.date]: value
        });
    }
    const getResultFromFirestore = () => {
        firebase
            .firestore()
            .collection("rides")
            .where('start', '==', lists.start)
            .where('destination', '==', lists.destination)
            .where('counter', '==', lists.counter)
            .where('date', '==', lists.date)
            .orderBy('price', 'asc')
            .onSnapshot((snapshot) => {
                const lists = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setLists(lists);
            });
    };
    //Styling
    const title = {
        color: "green",
    }
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
    const cardEntry = {
        width: "80%",
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
        <div className="container">
            <Navbar/>

            <main>
                <h3 style={title}>Search Results</h3>
                <div style={inputFields} className="inputFields">
                    <form>
                        <label>
                            <input type="text"
                                   name="start"
                                   placeholder="Start"
                                   value={lists.start}
                                    onChange={handleChange}/>
                        </label>
                        <label>
                            <input type="text"
                                   name="start"
                                   placeholder="Ziel"
                                   value={lists.destination}
                                   onChange={handleChange}/>
                        </label>
                        <label>
                            Mitfahrer*In
                            <input type="text"
                                   name="start"
                                   value={lists.counter}
                                   onChange={handleChange}/>
                        </label>
                        <label>
                            <input type="text"
                                   name="start"
                                   value={lists.date}
                                   onChange={handleChange}/>
                        </label>
                    </form>
                </div>

                <div className="results">
                    <Card style={cardEntry}>
                        <Card.Body>
                            <Row>
                                <Col style={colStyle} xs={3}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzQrtQGEuLsPktS09w7j-GIl7Pcequ4XOr7ugcW2Akd5rRs38TKMOiv6qeo2Di_1pf8&usqp=CAU"
                                         alt="avatar"
                                         style={userImg}/>
                                    {/* {entry.userName} */}
                                    <p>Selina</p>
                                </Col>
                                <Col style={colStyle} xs={3}>
                                    {/* {entry.startTime} */}
                                    <p>Abfahrt: 13.00 Uhr</p>
                                    {/* {entry.arrivalTime} */}
                                    <p>Ankunft: 21.00 Uhr</p>
                                </Col>
                                <Col style={colStyle} xs={3}>
                                    {/* {entry.car} */}
                                    <p>Auto: BMW</p>
                                    {/* {entry.seat} */}
                                    <p>Sitze: 3</p>
                                </Col>
                                <Col style={colStyle} xs={3}>
                                    {/* {entry.price} */}
                                    <h4>25,00€</h4>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </main>

        </div>
    )
}

export default SearchResults;