import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTransactions } from "../../useTransactions";

ChartJS.register(ArcElement, Tooltip, Legend);

const Details = ({ title }) => {
	const { total, chartData } = useTransactions(title);

	return (
		<Card
			sx={{
				borderBottom: `10px solid ${
					title === "Income" ? "rgba(0, 255, 0, 0.5)" : "rgba(255, 0, 0, 0.5)"
				}`,
			}}
		>
			<CardHeader title={title} />
			<CardContent>
				<Typography variant="h5">PKR {total}</Typography>
				<Doughnut data={chartData} />
			</CardContent>
		</Card>
	);
};

export default Details;
