/** @format */

// import { Link } from "react-router-dom";
// import "./home.scss";
import logo from "../../assets/icons/logo2.png";

function Home() {
	return (
		<div>
			<h2>HOME</h2>
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="logo-name">
				Notepad-<span className="logo-with">w/</span>#
			</h1>
			{/* <Link className="error404__link links" to="/">
				Retourner à la page d'accueil
			</Link> */}
		</div>
	);
}

export default Home;
