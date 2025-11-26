import { useEffect, useState } from "react";
import UserCard from "./UserCard";

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
		<div>
			<UserCard {...user} getData={getData}/>
		</div>
	);
};

export default User;
