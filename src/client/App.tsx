import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import WhoWeAre from './views/WhoWeAre';
import Research from './views/Research';
import People from './views/People';
import News from './views/News';
import Resources from './views/Resources';
import Contact from './views/Contact';
import NavBar from '../components/NavBar';

/* HOOK REACT EXAMPLE */
const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/mission"
					element={<WhoWeAre />}
				/>
				<Route
					path="/research"
					element={<Research />}
				/>
				<Route
					path="/people"
					element={<People />}
				/>
				<Route
					path="/news"
					element={<News />}
				/>
				<Route
					path="/resources"
					element={<Resources />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

interface AppProps { }

export default App;
