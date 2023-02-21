import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components";
import { Logout } from "./components";
import { Home } from "./components";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
          			<Route exact path="/" element={<Home />}/>
          			<Route exact path="/login" element={<Login/>}/>
					<Route exact path="/logout" element={<Logout/>}/>
        		</Routes>
			</Router>
		</div>
	);
}

export default App;
