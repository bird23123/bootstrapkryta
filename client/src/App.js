import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Boiler from "./components/Boiler";
import Heatexch from "./components/Heatexch";
import Hydraulic from "./components/Hydraulic";
import Tasks from "./components/Tasks";
import About from "./components/About";
import Get from "./components/Get";

function App() {
	return (
		<Routes>
			<Route path="/" exact element={<Main />} />
			<Route path="/registration" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/hydraulic" exact element={<Hydraulic />} />
			<Route path="/heatexch" exact element={<Heatexch />} />
			<Route path="/boiler" exact element={<Boiler />} />
			<Route path="/tasks" exact element={<Tasks />} />
			<Route path="/about" exact element={<About />} />
			<Route path="/get" exact element={<Get />} />
		</Routes>
	);
}

export default App;
