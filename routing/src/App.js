import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import Personnel from "./pages/Personnel";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
			<Header/>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/courses" element={<Courses />} />
						<Route path="/personnel" element={<Personnel />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer/>
			</BrowserRouter>
		</div>
	);
}

export default App;
