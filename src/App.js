import Navbar from "./components/nav/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/Home";
import {Route} from "react-router-dom"
function App() {
	return (
		<>
			
			<Navbar />
			<div className="d-flex">
			<Sidebar />
<Route exact path="/">
			<Home/>
</Route>
{/* 

<Route path="/login">
			<Login/>
</Route>

<Route exact path="/register">
			<Register/>
</Route>

<Route exact path="/myprofile">
			<Myprofile/>
</Route> */}


			</div>

		</>
	);
}

export default App;
