import { useNavigate } from "react-router-dom";
import "./personnel.css";

function PersonnelComponent({ avatar, email, first_name, last_name,id}) {
	const navigate = useNavigate();
	return (
		<div
			className="personnel-card"
			onClick={(e) => navigate(`/personnel-detail/${id}`)}
		>
			<h1>
				{first_name} {last_name}
			</h1>
			<img src={avatar} alt="img" />
			<p>{email}</p>

		</div>
        
	);
}

export default PersonnelComponent;
