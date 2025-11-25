import Language from "./Language";
import { data } from "../data/data";
const Card = () => {
	return (
		<div className="card-wrapper">
			<h1>Heading</h1>
			<div className="language-wrapper">
				{data.map((lang, index) => (
					<Language {...lang} key={index}/>
				))}
			</div>
		</div>
	);
};

export default Card;
