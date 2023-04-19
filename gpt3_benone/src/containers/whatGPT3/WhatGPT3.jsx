import React from "react";
import "./WhatGPT3.css";
import { Feature } from "../../components";
export const WhatGPT3 = () => {
	return (
		<div className="gpt3__whatgpt3 section__margin" id="wgpt3">
			<div className="gpt3__whatgpt3-feature">
				<Feature
					title="What is GPT-3"
					text="GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art natural language processing (NLP) model developed by OpenAI. It is a large-scale language model with 175 billion parameters, making it one of the largest and most powerful language models ever created."
				/>
			</div>
			<div className="gpt3__whatgpt3-heading">
				<h1 className="gradient__text">The Possibilities are beond your imagination</h1>
				<p>Explore the Library</p>
			</div>
			<div className="gpt3__whatgpt3-container">
				<Feature
					title="Chatbots"
					text="Chatbots are computer programs designed to simulate human conversation using natural language processing (NLP) techniques. They are often used in messaging applications, websites, and mobile apps to provide automated customer support, answer questions, and engage in simple conversations with users."
				/>
				<Feature
					title="Knowledgebase"
					text="Technical documentation: OpenAI has released detailed technical documentation for GPT-3, including a research paper that describes the model's architecture, training process, and evaluation results."
				/>
				<Feature
					title="Education"
					text="The training process for GPT-3 involved unsupervised learning, which means that the model learned by analyzing patterns and structures in the data it was trained on, without explicit instructions or feedback from humans"
				/>
			</div>
		</div>
	);
};
export default WhatGPT3;
