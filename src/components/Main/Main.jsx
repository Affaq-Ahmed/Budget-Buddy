import {
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import React, { useContext } from "react";
import Form from "./Form";
import List from "./List";
import { ExpenseTrackerContext } from "../../context/context";

const Main = () => {
	const { balance } = useContext(ExpenseTrackerContext);

	return (
		<Card>
			<CardHeader title="Budget Buddy" subheader="Built by Affaq" />
			<CardContent>
				<Typography alignItems="center" variant="h5">
					Total Balance: PKR {balance}
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
