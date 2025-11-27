import "./header.css";

const HeaderCard = ({ name, picture }) => {
	return (
		<div className="header-wrapper">
			<div className="image-wrapper">
				<img src={picture?.medium} alt="img" />
			</div>
			<h1> {`${name?.first} ${name?.last}`}</h1>
		</div>
	);
};

export default HeaderCard;
