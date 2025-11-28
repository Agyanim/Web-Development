import { useState } from "react";

const Form = ({addTodoHandler}) => {
	const [product, setProduct] = useState("");
	const [quantity, setQuantity] = useState(1);

	const submitHandler = (e) => {
		e.preventDefault();
		if (product) {
			const newTodo = {
				id: Date.now(),
				product,
				qty: quantity,
				isPacked: false,
			};
			addTodoHandler(newTodo);
            setProduct("");
            setQuantity(1);
		}
	};

	return (
		<form onSubmit={submitHandler} className="form-wrapper">
			<select
				className="select-product"
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
				name="select-product"
				id="select-product"
			>
				{[...Array(20)].map((_, index) => (
					<option value={index + 1} key={index + 1}>
						{index + 1}
					</option>
				))}
			</select>
			<input
				className="product"
				type="text"
				name="product"
				id="product"
				placeholder="Enter Product Name"
				value={product}
				onChange={(e) => setProduct(e.target.value)}
			/>
			<input className="add-btn" type="submit" value="Add" />
		</form>
	);
};

export default Form;
