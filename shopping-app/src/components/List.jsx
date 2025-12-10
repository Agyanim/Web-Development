const List = ({ item, onDelete,doneHandler }) => {
	const {id, product, qty, isPacked } = item;
	return (
		<li>
			<span>{qty}</span>
			<p className={`${isPacked ? "isPacked" : ""}`}>{product}</p>
			<div className="btn-wrapper">
				<button onClick={()=>doneHandler(id)} className="done-btn">Done</button>
				<button onClick={() => onDelete(id)} className="delete-btn">
					Delete
				</button>
			</div>
		</li>
	);
};

export default List;
