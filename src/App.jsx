// rafce -> shortcut to create component and export
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
// import Exercise from "./pages/Exercise/Exercise";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
// import Learnmore from "./pages/learnmore/learnmore";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
	return (
		<BrowserRouter>

			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				{/* <Route path="Exercise" element={<Exercise />} /> */}
				<Route path="gallery" element={<Gallery />} />
				<Route path="plans" element={<Plans />} />
				<Route path="trainers" element={<Trainers />} />
				{/* <Route path="learnmore" element={<Learnmore />} /> */}
				<Route path="*" element={<NotFound />} />

			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
