import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Project />
			<Contact />
			<Services />
			<Footer />
		</div>
	);
}

export default App;
