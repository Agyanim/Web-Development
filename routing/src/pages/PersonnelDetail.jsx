import { useNavigate, useParams } from "react-router-dom";
import "./pages.css";
import axios from "axios";
import { useEffect, useState } from "react";
const PersonnelDetail = () => {
	const [personnel, setPersonnel] = useState({});
	const navigate = useNavigate();
	const { id } = useParams();

	const getPersonnel = async () => {
		try {
			const res = await axios(`https://reqres.in/api/users/${id}`, {
				headers: "x-api-key: reqres-free-v1",
			});

			setPersonnel(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPersonnel();
	}, []);

	return (
		<div className="personnel-detail-wrapper">
			<h1>
				{personnel?.first_name} {personnel?.last_name}
			</h1>
			<img src={personnel?.avatar} alt="img" />
			<p>{personnel?.email}</p>
			<div>
				<button onClick={() => navigate(-1)}>Back</button>
			</div>
		</div>
	);
};

export default PersonnelDetail;
