//components
import Navbar from "../components/Navbar";
import React from "react";
import {Card, Row, Col} from "react-bootstrap";
import {useState} from "react";
import firebase from "../firebase";

const SearchResults = () => {
    const [lists, setLists] = useState([]);
    const getResultFromFirestore = () => {
        firebase.firestore()
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
    const resultsDiv = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const cardEntry = {
        width: "70%",
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
                <div style={inputFields} className="inputFields">
                {/* Import Search Component */}
                </div>

                <div style={resultsDiv} className="results">
                    <Card style={cardEntry}>
                        <Card.Body>
                            <Row>
                                <Col style={colStyle}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzQrtQGEuLsPktS09w7j-GIl7Pcequ4XOr7ugcW2Akd5rRs38TKMOiv6qeo2Di_1pf8&usqp=CAU"
                                         alt="avatar"
                                         style={userImg}/>
                                    {/* {entry.userName} */}
                                    <p>Selina</p>
                                </Col>
                                <Col style={colStyle}>
                                    <Row>
                                        {/* {entry.startTime} */}
                                        <p>Abfahrt: 13.00 Uhr</p>
                                        <br/>
                                        {/* {entry.arrivalTime} */}
                                        <p>Ankunft: 21.00 Uhr</p>
                                    </Row>
                                </Col>
                                <Col style={colStyle}>
                                    <Row>
                                        {/* {entry.car} */}
                                        <p>Auto: BMW</p>
                                        <br/>
                                        {/* {entry.seat} */}
                                        <p>Sitze: 3</p>
                                    </Row>
                                </Col>
                                <Col style={colStyle}>
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