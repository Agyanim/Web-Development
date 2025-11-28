import "../index.css";
import List from "./List";
// import shoppingList from "../data/shoppingList";
import Form from "./Form";
const Main = ({ items, addTodoHandler, onDelete, doneHandler, select, setSelect}) => {
	return (
		<div className="main-wrapper">
			{/* Form Section */}
			<Form addTodoHandler={addTodoHandler} />
			{/* List component section */}
			<ul className="list-wrapper">
				{items.map((item) => (
					<List
						key={item.id}
						item={item}
						onDelete={onDelete}
						doneHandler={doneHandler}
					/>
				))}
			</ul>
			{/* Sort section */}
			<div className="select-wrapper">
				<label htmlFor="select">Sort by:</label>
				<select name="select" id="select" className="select" value={select} onChange={(e)=>setSelect(e.target.value)}>
					<option value="input">input</option>
					<option value="packed">packed</option>
				</select>
			</div>
		</div>
	);
};

export default Main;
