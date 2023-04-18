import React from "react";
import "./Features.css";
export const Features = ({ title, text }) => {
	return (
		<div className="gpt3__feature-container__feature">
			<div className="gpt3__features-container__feature-title">
				<h1> {title} </h1>
			</div>
			<div className="gpt3__features-container__feature-text">
				<p>{text}</p>
			</div>
		</div>
	);
};
export default Features;
