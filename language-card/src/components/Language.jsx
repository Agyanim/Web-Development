import { useState } from "react";
import CardImage, { LanguageList } from "./CardImage";

const Language = ({ name, image, option }) => {
	const [show, setShow] = useState(true);

	return (
		<div className="lang-card-wrapper" onClick={() => setShow((show) => !show)}>
			{show && (
				<CardImage name={name} image={image}/>
			)}

			{!show && (
				<LanguageList option={option}/>
			)}
		</div>
	);
};

export default Language;
