import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {Col, Row, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import firebase from '../firebase';
import DatePicker from "react-datepicker";

// import required css from library
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {

    //Values of input-fields
    const [start, setStart] = useState('');
    const [destination, setDestination] = useState('');
    const [goods, setGoods] = useState('');
    const [passengers, setPassengers] = useState(0);
    const [date, setDate] = useState('');

    //value and functions for conditional rendering
    const [searchDrive, setSearchDrive] = useState(false);

    const changeSearchToDrive = () => setSearchDrive(true);
    const changeSearchToGoods = () => setSearchDrive(false);

    //store searchresult
    const [result, setResult] = useState([]);

    //functions
    const doSearch = () => {
        if (searchDrive) {
            firebase.firestore()
                .collection('rides')
                .where('startride', '==', start)
                .where('endride', '==', destination)
                .where('passenger', '==', passengers)
                .onSnapshot((snapshot) => {
                    const result = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setResult(result);
                    console.log(result);
                });
        } else {
            firebase.firestore()
                .collection('shippings')
                .where('start', '==', start)
                .where('end', '==', destination)
                .where('typeSpedition', '==', goods)
                .onSnapshot((snapshot) => {
                    const result = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setResult(result);
                    console.log(result);
                });
        }

    }

    //css
    let style = {
        search: {
            backgroundColor: '#669D97',
            color: '#ffffff',
            paddingTop: 30 + 'px',
            paddingBottom: 30 + 'px',
            paddingLeft: 90 + 'px',
            borderRadius: 15 + 'px',
        },
        searchButton: {
            backgroundColor: '#ffffff',
            borderColor: '#ffffff',
            borderRadius: 0 + 'px',
            borderTopRightRadius: 15 + 'px',
            borderBottomRightRadius: 15 + 'px',
            height: 60 + 'px',
            width: 60 + 'px',
        },
        input: {
            backgroundColor: '#A3C4C1',
            border: 0 + 'px',
            height: 60 + 'px',
            borderRadius: 0 + 'px',
            color: '#ffffff',
        },
        inputFirst: {
            backgroundColor: '#A3C4C1',
            border: 0 + 'px',
            height: 60 + 'px',
            borderRadius: 0 + 'px',
            borderTopLeftRadius: 15 + 'px',
            borderBottomLeftRadius: 15 + 'px',
            color: '#ffffff'
        },
        col: {
            padding: 3 + 'px',
        },
    }

    //HTML
    return (
        <Col>
            <Row>
                <Col>
                </Col>

                <Col style={style.search}>
                    <Row>
                        <Col>
                            {!searchDrive &&
                                <h5 style={{textAlign: 'left', textDecoration: 'underline', paddingLeft: 40 + 'px'}}
                                    onClick={changeSearchToGoods}
                                >Waren senden</h5>
                            }
                            {searchDrive &&
                                <h5 style={{textAlign: 'left', paddingLeft: 40 + 'px'}}
                                    onClick={changeSearchToGoods}
                                >Waren senden</h5>
                            }
                        </Col>
                        <Col>
                            {!searchDrive &&
                                <h5 onClick={changeSearchToDrive}
                                    style={{textAlign: 'left'}}
                                >Mitfahrgelegenheit suchen</h5>
                            }
                            {searchDrive &&
                                <h5 onClick={changeSearchToDrive}
                                    style={{textAlign: 'left', textDecoration: 'underline'}}
                                >Mitfahrgelegenheit suchen</h5>
                            }
                        </Col>
                    </Row>

                    <br/>

                    <Row>
                        <Form>
                            <Row style={{width: '800px'}}>
                                <Col style={style.col}>
                                    <Form.Control value={start}
                                                  onChange={(e) => setStart(e.target.value)}
                                                  type={'text'}
                                                  placeholder={'Von'}
                                                  style={style.inputFirst}/>
                                </Col>
                                <Col style={style.col}>
                                    <Form.Control value={destination}
                                                  onChange={(e) => setDestination(e.target.value)}
                                                  type={'text'}
                                                  placeholder={'Nach'}
                                                  style={style.input}/>
                                </Col>
                                <Col style={style.col}>
                                    {!searchDrive &&
                                        <Form.Select style={style.input}
                                                     onChange={(e) => setGoods(e.target.value)}>
                                            <option style={{color: '#4F4F4F'}}>Was?</option>
                                            <option value="1">Fahrrad</option>
                                            <option value="2">Pakete</option>
                                            <option value="3">Möbelstücke</option>
                                        </Form.Select>
                                    }
                                    {searchDrive &&
                                        <Form.Control value={passengers}
                                                      onChange={(e) => setPassengers(e.target.value)}
                                                      type={'number'}
                                                      placeholder={'Wie viele?'}
                                                      style={style.input}/>
                                    }
                                </Col>
                                <Col style={style.col}>
                                    <DatePicker
                                        selected={date}
                                        onChange={selectedDate => setDate(selectedDate)}
                                        dateFormat={'dd.MM.yyyy'}
                                        minDate={new Date()}
                                        className={'datePicker'}
                                        placeholderText={'Wann?'}
                                    />
                                </Col>
                                <Col style={style.col}>
                                    <Button style={style.searchButton}>
                                        <FontAwesomeIcon onClick={() => doSearch()}
                                                         className={'icon fa-2x'}
                                                         icon={faMagnifyingGlass}
                                                         style={{color: '#669D97'}}
                                        />
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
