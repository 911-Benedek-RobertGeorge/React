import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

export const Header = () => {
	return (
		<div className="gpt3__header section__padding">
			<div className="gpt3__header-content">
				<h1 className="gradient__text"> Let's build something amazing with GPT-3 OpenAI</h1>
				<p>
					I am an artificial intelligence language model called ChatGPT, developed by OpenAI, with the ability to understand and process natural
					language text input and generate human-like responses.
				</p>
				<div className="gpt3__header-content__input">
					<input type="email" placeholder="Your email address"></input>
					<button type="button">Get Started</button>
				</div>
				<div className="gpt3__header-content__people">
					<img src={people} alt="people" />
					<p>1600 people requested access</p>
				</div>
			</div>
			<div className="gpt3__header-image">
				<img src={ai} alt="ai" />
			</div>
		</div>
	);
};
export default Header;
