//components
import Navbar from "../components/Navbar";
import React from "react";
import {Card, Row, Col} from "react-bootstrap";
import Search from "../components/Search";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";

const SearchResults = () => {
    const router = useRouter();
    const [result, setResult] = useState({});
    const queryType = router.query.searchType;

    const searchData = router.query;

    //triggers when site is mount
    useEffect(() => {
        console.log('queryType: ', queryType);
        setResult(searchData);
    }, []);


    let listResult = [
        {
            id: 'd30i1',
            startCity: 'Berlin',
            destinationCity: 'Frankfurt',
            startTime: '10',
            arrivalTime: '21',
            price: '30',
            car: 'BMW',
            userId: "39hw3",
            name: 'Lili',
            passengers: 3,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzQrtQGEuLsPktS09w7j-GIl7Pcequ4XOr7ugcW2Akd5rRs38TKMOiv6qeo2Di_1pf8&usqp=CAU',
            measurements: 0,
        },
        {
            id: '45jp2',
            startCity: 'Berlin',
            destinationCity: 'Frankfurt',
            startTime: '6',
            arrivalTime: '15',
            price: '25',
            car: 'Kia',
            userId: 'hfi43',
            name: 'Manfred',
            passengers: 2,
            photo: 'https://static.vecteezy.com/system/resources/previews/002/275/848/large_2x/hipster-avatar-icon-of-bearded-man-in-glasses-vector.jpg',
            measurements: 0,
        },
        {
            id: 'b3209',
            startCity: 'Berlin',
            destinationCity: 'Frankfurt',
            startTime: '13',
            arrivalTime: '20',
            price: '15',
            car: 'VW Golf',
            userId: '2ih93',
            name: 'Tom',
            passengers: 3,
            photo: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
            measurements: 0,
        },
        {
            id: '94jp2',
            startCity: 'Berlin',
            destinationCity: 'Frankfurt',
            startTime: '15',
            arrivalTime: '23',
            price: '20',
            car: 'Smart',
            userId: 'r32hb',
            name: 'Naomi',
            passengers: 1,
            photo: 'https://static.vecteezy.com/system/resources/previews/002/275/815/non_2x/african-american-woman-avatar-icon-of-afro-female-vector.jpg',
            measurements: 0,
        },
    ];

    const showDetails = (dataId) => {
        router.push({
            pathname: "/offer-details/",
            // query: {id: dataId},
            query: {
                id: '2ZzUiWPMKSbAsjFHKS53',
                offerType: queryType,
            },
        }).catch((err) => console.log(err));
    }

    //Styling
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
        width: "880px",
        height: "135px",
        margin: "10px",
        borderWidth: "3px",
        borderColor: "#005B52",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center"
    }
    const cardBody = {
        width: "90%",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
    }
    const colStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const userImg = {
        width: "90px",
        height: "90px",
        borderRadius: "15px",
        objectFit: "cover",
    }
    const userNameTag = {
        textAlign: "left",
        paddingTop: "20px",
        paddingRight: "0",
        paddingLeft: "0",
    }

    // HTML
    return (
        <div>
            <Navbar/>
            <main>
                <div style={searchBar} className="inputFields">
                    {/* Import Search Component */}
                    <Search />
                </div>

                {listResult.map(entry => {
                    return (
                        <div key={entry.id} style={resultsDiv} className="results">
                            <Card style={cardEntry} onClick={() => showDetails(entry.id)}>
                                <Card.Body style={cardBody}>
                                    <Row>
                                        <Col className="col-2">
                                            <img src={entry.photo}
                                                 alt="avatar"
                                                 style={userImg}/>
                                        </Col>
                                        <Col className="col-2" style={userNameTag}>
                                            <p style={{margin: "10px", width: ""}}>{entry.name}</p>
                                        </Col>
                                        <Col className="col-3" style={colStyle}>
                                            <Row>
                                                <p>Startort: {entry.startCity}</p>
                                                <br/>
                                                <p>Zielort: {entry.destinationCity}</p>
                                            </Row>
                                        </Col>
                                        <Col className="col-3" style={colStyle}>
                                            <Row>
                                                <p>Auto: {entry.car}</p>
                                                <br/>
                                                {/*{queryType === true*/}
                                                {/*? <p>Sitze: {entry.passengers}</p>*/}
                                                {/*: <p>Max. Maße: {entry.measurements}</p>}*/}
                                                {queryType === true ? (
                                                    <p>Sitze: {entry.passengers}</p>
                                                ) : (
                                                    <p>Max. Maße: {entry.measurements}</p>
                                                )}
                                            </Row>
                                        </Col>
                                        <Col className="col-2" style={colStyle}>
                                            <h3><strong>{entry.price}€</strong></h3>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </main>
            <div style={{width: "100%", marginTop: "20px"}}>
                <Footer/>
            </div>
        </div>
    )
}

export default SearchResults;