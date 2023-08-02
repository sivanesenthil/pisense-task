import React from "react";
import "../styles/dash.css";

import AttendanceChart from "../components/table.js";
import HomeworkChart from "../components/homework";
import Behavioral from "../components/behavior";

const Dashboard = () => {
	return (
		<div className="Main">
			<AttendanceChart />
			<Behavioral />
			<HomeworkChart />
		</div>
	);
};

export default Dashboard;