import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="contact" element={<Contact />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
