import React from "react";
import "../styles/table.css";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const AttendanceChart = () => {
	// Sample attendance data and criteria
	const attendanceData = [
		{ name: "sivane", attendancePercentage: 85 },
		{ name: "swathy", attendancePercentage: 92 },
		{ name: "hiba", attendancePercentage: 78 },
		{ name: "prams", attendancePercentage: 95 },
	];

	const eligibilityCriteria = 90;

	// Extract names and percentages from the data array
	const names = attendanceData.map((item) => item.name);
	const percentages = attendanceData.map((item) => item.attendancePercentage);

	// Calculate eligibility based on the criteria
	const eligibility = percentages.map(
		(percentage) => percentage >= eligibilityCriteria
	);

	// Chart data and options
	const chartData = {
		labels: names,
		datasets: [
			{
				label: "Attendance Percentage",
				data: percentages,
				backgroundColor: eligibility.map((isEligible) =>
					isEligible ? "rgba(54, 162, 235, 0.8)" : "rgba(220, 53, 69, 0.8)"
				),
			},
		],
	};

	const chartOptions = {
		scales: {
			y: {
				beginAtZero: true,
				suggestedMax: 50,
			},
		},
	};

	return (
		<div className="attendance-chart">
			<Bar data={chartData} options={chartOptions} />
		</div>
	);
};

export default AttendanceChart;