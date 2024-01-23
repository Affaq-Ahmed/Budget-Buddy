import {
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import React from "react";
import Form from "./Form";
import List from "./List";

const Main = () => {
	return (
		<Card>
			<CardHeader title="Budget Buddy" subheader="Built by Affaq" />
			<CardContent>
				<Typography alignItems="center" variant="h5">
					Total Balance $100
				</Typography>
				<Typography
					variant="subtitle1"
					style={{ lineHeight: "1.5rem", marginTop: "20px" }}
				>
					Zoro
				</Typography>
				<Divider style={{ margin: "20px 0" }} />
				<Form />
			</CardContent>
			<CardContent style={{ paddingTop: 0 }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<List />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Main;
