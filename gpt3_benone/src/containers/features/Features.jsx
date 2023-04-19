import React from "react";
import "./Features.css";
import "../../components/feature/Feature";
import Feature from "../../components/feature/Feature";
const featuresData = [
	{
		title: "Improving end distrust instatly",
		text: "Web2 giants and Web3 projects entertain a complex relationship. They cooperate to maximize their chances of survival, yet they also compete through a combination of dynamic factors and anti-competitive strategies.",
	},
	{
		title: "Become the tended active",
		text: "Core principles of peer workers involve delivering recovery-oriented, person-centered, trauma-informed care",
	},
	{
		title: "Really boy law county",
		text: "Digital approaches hold potential for overcoming many of these challenges, yet barriers persist in ensuring access to quality, affordable, and effective services.",
	},
];
export const Features = () => {
	return (
		<div className="gpt3__features section__padding">
			<div className="gpt3__features-heading">
				<h1 className="gradient__text"> The future is now and You just need to realize it </h1>
				<p>Request early access to get started</p>
			</div>
			<div className="gpt3__features-container ">
				{featuresData.map((item, index) => (
					<Feature title={item.title} text={item.text} key={item.title + index} />
				))}
			</div>
		</div>
	);
};
export default Features;
