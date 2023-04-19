import React from "react";
import "./Possibility.css";
import possibilityImage from "../../assets/possibility.png";
export const Possibility = () => {
	return (
		<div className="gpt3__possibility section__padding">
			<div className="gpt3__possibility-image">
				<img src={possibilityImage} alt="possibility"></img>
			</div>
			<div className="gpt3__possibility-content">
				<h4>Request early access to get started</h4>
				<h1 className="gradient__text"> The possibility are beyond your imagination </h1>
				<p>Yet bed any for travveling assistance</p>
				<h4>Request Early Access to get Started</h4>
			</div>
		</div>
	);
};
export default Possibility;
