import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const Details = ({ title }) => {
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
				<Typography variant="h5">$50</Typography>
				{/* <Doughnut data="DATA" /> */}
			</CardContent>
		</Card>
	);
};

export default Details;
