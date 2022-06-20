import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {Col, Row, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase/app";
import DatePicker from "react-datepicker";

// import required css from library
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {

    const [result, setResult] = useState([]);
    console.log(result);
    const [start, setStart] = useState('');
    console.log(start);
    const [destination, setDestination] = useState('');
    console.log(destination);
    const [goods, setGoods] = useState('');
    console.log(goods);
    const [date, setDate] = useState(null);
    console.log(date);

    const changeSearchToDrive = () => searchDrive(true);

    //Funktionen
    const doSearch = () => {
        firebase
            .firestore()
            .collection('rides')
            .where('start', '==', start)
            .where('destination', '==', destination)
            .where('goods', '==', goods)
            .where('date', '==', date)
            .orderBy('price', 'asc')
            .onSnapshot((snapshot) => {
                const result = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setResult(result);
            })
    }

    let style = {
        imageOne: {
            textAlign: 'center',
        },
        imageTwo: {},
        search: {
            backgroundColor: '#669D97',
            color: '#ffffff',
            padding: 30,
            borderRadius: 15 + 'px',
        },
        container: {
            backgroundColor: '#669D97',
            color: '#ffffff',
        },
        text: {
            textAlign: 'center',
        },
        row: {
            padding: 30,
        },
        column: {
            columnWidth: 30 + 'px',
        },
        info: {
            color: '#4F4F4F',
        },
        button: {
            border: 0 + 'px',
            borderRadius: 15 + 'px',
            backgroundColor: '#669D97',
            color: '#ffffff',
            paddingLeft: 35 + 'px',
            paddingRight: 35 + 'px',
        },
        searchButton: {
            color: '#669D97',
            border: 0 + 'px',
            borderRadius: 15 + 'px'
        },
        input: {
            backgroundColor: '#A3C4C1',
            color: '#ffffff',
            border: 0 + 'px',
        },
    }

    return (
        <Col className={'container-fluid'}>
            <Row>
                <Col>
                </Col>

                <Col style={style.search}>
                    <Row>
                        <Col>
                            <h5 style={{textAlign: 'left'}}>Waren senden</h5>
                        </Col>
                        <Col>
                            <h5 onClick={changeSearchToDrive} style={{textAlign: 'right'}}>Mitfahrgelegenheit suchen</h5>
                        </Col>
                    </Row>

                    <br/>
                    <br/>

                    <Row>
                        <Form>
                            <Row style={{width: '900px'}}>
                                <Col>
                                    <Form.Control value={start}
                                                  onChange={(e) => setStart(e.target.value)}
                                                  type={'text'} placeholder={'Von'}
                                                  style={style.input}/>
                                </Col>
                                <Col>
                                    <Form.Control value={destination}
                                                  onChange={(e) => setDestination(e.target.value)}
                                                  type={'text'}
                                                  placeholder={'Nach'}
                                                  style={style.input}/>
                                </Col>
                                <Col>
                                    <Form.Select style={style.input}
                                                 onChange={(e) => setGoods(e.target.value)}>
                                        <option>Was?</option>
                                        <option value="1">Fahrrad</option>
                                        <option value="2">Pakete</option>
                                        <option value="3">Möbelstücke</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    {/*<Form.Control value={date}*/}
                                    {/*              onChange={(e) => setDate(e.target.value)}*/}
                                    {/*              type={'number'}*/}
                                    {/*              placeholder={'Wann?'}*/}
                                    {/*              style={style.input}/>*/}
                                    <DatePicker
                                        selected={date}
                                        onChange={selectedDate => setDate(selectedDate)}
                                        dateFormat={'dd.MM.yyyy'}
                                        minDate={new Date()}
                                    />
                                </Col>
                                <Col>
                                    <Button style={{backgroundColor: '#ffffff'}}>
                                        <FontAwesomeIcon onClick={() => doSearch()} className={'icon'}
                                                         icon={faMagnifyingGlass} style={style.searchButton}/>
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Row>
                </Col>

                <Col>
                </Col>
            </Row>
        </Col>
    )
}

export default Search;
