
const Language = ({name,image,option}) => {
    
	return (
		<div className="lang-card-wrapper">
            <img className="image-wrapper" src={image} alt={image} />
			<h3>
                {name}
            </h3>
		</div>
	);
};

export default Language;
