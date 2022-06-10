import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Navbar from "../components/Navbar";

const FcTemplate = () => {
	const [count, setCount] = useState(0);

	const handleIncrease = () => {
		setCount(count + 1);
	};
	const handleDecrease = () => {
		setCount(count - 1);
	};

	useEffect(() => {
		setCount(0);
	}, []);

	return (
		<div className="container">
			<Navbar />
			<h3>functionalComponent_template</h3>
			<div className="m-2">
				<div>
					count is: <h2 className="text-primary">{count}</h2>
				</div>
				<Button className="btn-secondary me-3" onClick={handleIncrease}>
					increase count
				</Button>
				<Button className="btn-danger" onClick={handleDecrease}>
					decrease count
				</Button>
			</div>
		</div>
	);
};

export default FcTemplate;
