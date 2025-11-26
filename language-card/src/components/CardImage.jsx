
const CardImage = ({image,name}) => {
  return (
    <div className="cardImage">
					<img className="image-wrapper" src={image} alt={image} />
					<h3>{name}</h3>
				</div>
  )
}

export default CardImage


export const LanguageList = ({option})=>{
    return(
        <ul className="language-list">
					{option.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
    )
}