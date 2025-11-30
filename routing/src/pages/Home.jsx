import React from "react";
import "./pages.css";
import Courses from "./Courses";

const Home = () => {
	return (
		<div className="home-wrapper">
				<h1>About</h1>
			<div className="about-wrapper">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet alias sit doloremque deleniti iusto similique dignissimos minus delectus? Accusamus, dolore!
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quam delectus. Reiciendis nostrum consequuntur deleniti similique, eius aliquid optio obcaecati?
					</p>
			</div>
			<div className="about-wrapper">
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo
					consequatur odio delectus rerum nostrum magnam vel ex. Consectetur
					magni doloremque expedita numquam sit molestias maiores perspiciatis
					nulla, quod amet!
				</p>
			</div>
			<div className="course-wrapper">
				<h1>Courses</h1>
				<div>
					<Courses />
				</div>
			</div>
		</div>
	);
};

export default Home;
