import React, {useState} from "react";
import {Image, Nav} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	//functions
	const [setShow] = useState(false);
	const handleShow = () => setShow(true);

	//css
	let styles = {
		nav: {
			color: "#005B52",
			backgroundColor: '#FFFFFF'
		},
		image: {
			height: 50,
			width: 130,
		}
	}

	//HTML
	return (
		<Nav style={styles.nav} className="navbar navbar-expand-lg">
			<Image style={styles.image}
				   className="navbar-brand"
				   alt={'logo'}
				   src={'/semi_androidMyCargonautmdpi.png'}/>

			<div className="collapse navbar-collapse"
				 id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li>
						<a>Suche</a>
					</li>
				</ul>
				<FontAwesomeIcon className={'icon fa-2x'}
								 icon={faUser}
								 onClick={handleShow}
								 style={{color: '#005B52', position: 'absolute', right: 15 + 'px'}}/>
			</div>
		</Nav>
	);
};


export default Navbar;


