import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const Footer = () => {
	//css
	let styles = {
		footer: {
			backgroundColor: "#669D97",
			color: "#ffffff",
			padding: 30 + "px",
		},
	};

	//HTML
	return (
		<footer style={styles.footer}>
			<Row>
				<Col>
					<Image
						alt={"logo"}
						src={"/semi_androidMyCargonautmdpi.png"}
						width={"150px"}
						height={"60px"}
					/>
				</Col>
				<Col style={{ textAlign: "center" }}>
					<br />
					<p>Impressum</p>
				</Col>
				<Col style={{ textAlign: "center" }}>
					<p>Instagram: mycargonaut</p>
					<p>Facebook: myCargonaut</p>
				</Col>
			</Row>
		</footer>
	);
};

export default Footer;
