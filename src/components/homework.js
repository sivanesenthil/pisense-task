import React from "react";
import { Doughnut } from "react-chartjs-2";

const homeworkCompletionData = {
	labels: ["English", "Science", "Social", "Math", "tamil"], // Replace with your sub-wise data
	datasets: [
		{
			data: [80, 70, 90, 85, 70], // Replace with your sub-wise homework completion data
			backgroundColor: ["#F0FFFF", "#FFFACD", "#AFEEEE", "#D8BFD8", "#F5DEB3"], // Custom colors for each sub-wise section
		},
	],
};

const HomeworkChart = () => {
	return (
		<div className="homework-chart">
			<h2>Homework</h2>
			<Doughnut data={homeworkCompletionData} />
		</div>
	);
};

export default HomeworkChart;