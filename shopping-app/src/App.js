import Header from "./components/header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./index.css";
import { useState } from "react";
// import shoppingList from "./data/shoppingList";

function App() {
	const [newTodoList, setNewTodoList] = useState([]);
	const addTodoHandler = (newTodo) => {
		setNewTodoList((newTodoList) => [...newTodoList, newTodo]);
	};

	const deleteHandler = (id) => {
		setNewTodoList((prev) => prev.filter((product) => product.id !== id));
	};

	const doneHandler = (id) => {
		setNewTodoList((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, isPacked: !item.isPacked } : item
			)
		);
  }

    const packedItems = newTodoList.filter(item => item.isPacked).length

	const [select,setSelect] = useState("input")
    var data =null
	if (select === "input"){
		data=newTodoList
	}
  
	if (select=== 'packed'){
		data = newTodoList.slice().sort((a,b)=> a.isPacked - b.isPacked)
	}
	return (
		<div className="app-wrapper">
			<Header />
			<Main
				items={data}
				onDelete={deleteHandler}
				addTodoHandler={addTodoHandler}
				doneHandler={doneHandler}
				setSelect={setSelect}
				select={select}
			/>
			<Footer items={newTodoList} packedItems={packedItems}/>
		</div>
	);
}

export default App;
