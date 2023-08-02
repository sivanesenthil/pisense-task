import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Sidebar from "./components/sidebar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<main className="app-main">
				<Sidebar />
				<Dashboard />
			</main>
		</div>
	);
}

export default App;