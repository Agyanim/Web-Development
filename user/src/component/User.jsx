import { useEffect, useState } from "react";
import HeaderCard from "./header/HeaderCard";
import MainCard from "./main/MainCard";
import "../index.css";
import axios from "axios";
import useCount from "./hooks/count";

const User = () => {
	const [user, setUser] = useState({});

	const getData = async () => {
		try {
			const res = await axios("https://randomuser.me/api/");
			setUser(res.data.results[0]);
		} catch (error) {
			console.log(error);
		}

	};
	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		const interId = setInterval(() => {
			getData();
		}, 5000);

		return () => {
			clearInterval(interId);
		};
	}, []);


	const {count}= useCount()
	console.log(count);
	
	return (
		<div className="user-wrapper">
			<HeaderCard {...user} />
			<MainCard {...user} getData={getData} />
		</div>
	);
};

export default User;
