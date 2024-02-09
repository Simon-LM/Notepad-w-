/** @format */
import "./App.scss";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import Footer from "./components/Footer/footer";
import About from "./pages/About/about";
import Error404 from "./pages/Error404/error404";

// import logo from "./assets/icons/logo2.png";

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<h1 className="logo-name">
// 					Notepad-<span className="logo-with">w/</span>#
// 				</h1>
// 				{/* <a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer">
// 					Learn React
// 				</a> */}
// 			</header>
// 		</div>
// 	);
// }

function App() {
	return (
		<Router>
			<main>
				{" "}
				<Header />
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<h1 className="logo-name">
					Notepad-<span className="logo-with">w/</span>#
				</h1>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Navigate to="/error404" />} />
					<Route path="/error404" element={<Error404 />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</main>
		</Router>
	);
}

export default App;
