import React from "react";
import { Line } from "react-chartjs-2";

const behavioralChartData = {
	labels: ["good", "bad", "good", "bad", "good"],
	datasets: [
		{
			label: "Behavioral Data",
			fill: false,
			borderColor: "rgb(75, 192, 192)",
			data: [10, 8, 5, 6, 9, 7], 
		},
	],
};

const behavioralChartOptions = {
	scales: {
		y: {
			beginAtZero: true,
			suggestedMax: 12,
		},
	},
};

export default function Behavioral() {
	return (
		<div className="behaviour-chart">
			<h2>Behavioral Chart</h2>
			<Line data={behavioralChartData} options={behavioralChartOptions} />
		</div>
	);
}