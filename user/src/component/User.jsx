import { useEffect, useState } from "react";
import HeaderCard from "./header/HeaderCard";
import MainCard from "./main/MainCard";
import "../index.css"

const User = () => {
	const [user, setUser] = useState({});
	
    const getData = () => {
		fetch("https://randomuser.me/api/")
			.then((res) => res.json())
			.then((data) => setUser(data.results[0])
            )
	};
useEffect(()=>{
    getData()
},[])
console.log(user);

	return (
		<div className="user-wrapper">
			<HeaderCard {...user} />
			<MainCard {...user} getData={getData}/>
		</div>
	);
};

export default User;
