import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";

const Form = () => {
	return (
		<Grid container spacing={2} style={{ marginBlockEnd: "-10px" }}>
			<Grid item xs={12}>
				<Typography variant="subtitle2" align="center" gutterBottom>
					...
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Type</InputLabel>
					<Select>
						<MenuItem value="income">Income</MenuItem>
						<MenuItem value="expense">Expense</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Category</InputLabel>
					<Select>
						<MenuItem value="business">Business</MenuItem>
						<MenuItem value="salary">Salary</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<TextField type="number" label="Amount" fullWidth />
			</Grid>
			<Grid item xs={6}>
				<TextField type="date" label="Date" fullWidth />
			</Grid>
			<Grid item xs>
				<Button
					variant="outlined"
					color="primary"
					fullWidth
					style={{ marginTop: "20px" }}
				>
					Create
				</Button>
			</Grid>
		</Grid>
	);
};

export default Form;
