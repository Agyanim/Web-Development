import { useState } from "react";

const Language = ({ name, image, option }) => {
	const [show, setShow] = useState(true);

	return (
		<div className="lang-card-wrapper" onClick={() => setShow((show) => !show)}>
			{show && (
				<div className="cardImage">
					<img className="image-wrapper" src={image} alt={image} />
					<h3>{name}</h3>
				</div>
			)}

			{!show && (
				<ul className="language-list">
					{option.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Language;
