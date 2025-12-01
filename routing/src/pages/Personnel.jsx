import axios from "axios";
import PersonnelComponent from "../components/personnel/PersonnelComponent";
import { useEffect, useState } from "react";
import "./pages.css"

const Personnel = () => {
	const [personnel, setPersonnel] = useState([]);

	const getPersonnel = async () => {
		try {
			const res = await axios("https://reqres.in/api/users", {
				headers: "x-api-key: reqres-free-v1",
			});
     
			setPersonnel(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};


	useEffect(() => {
		getPersonnel();
    
	},[]);

	return (
		<div className="personnel-wrapper" >
			{personnel.map((personnel) => (
				<PersonnelComponent {...personnel} key={personnel.id} />
			))}
		</div>
	);
};

export default Personnel;
