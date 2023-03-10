// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";

function App() {
	return (
		<>
			<Nav />
			<Intro1 />
			<Intro2 />
			<Intro3 />
			<Footer />
		</>
	);
}

export default App;
