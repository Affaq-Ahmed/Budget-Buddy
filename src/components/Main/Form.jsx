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
import React, { useContext, useState } from "react";
import { ExpenseTrackerContext } from "../../context/context";
import { v4 as uuidv4 } from "uuid";

const initialState = {
	amount: "",
	category: "",
	type: "Income",
	date: new Date(),
};

const Form = () => {
	const [formData, setFormData] = useState(initialState);
	const { addTransaction } = useContext(ExpenseTrackerContext);

	const createTransaction = () => {
		const transaction = {
			...formData,
			amount: Number(formData.amount),
			id: uuidv4(),
		};
		console.log(transaction);
		addTransaction(transaction);
		setFormData(initialState);
	};

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
					<Select
						value={formData.type}
						onChange={(e) => setFormData({ ...formData, type: e.target.value })}
					>
						<MenuItem value="Income">Income</MenuItem>
						<MenuItem value="Expense">Expense</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Category</InputLabel>
					<Select
						value={formData.category}
						onChange={(e) =>
							setFormData({ ...formData, category: e.target.value })
						}
					>
						<MenuItem value="business">Business</MenuItem>
						<MenuItem value="salary">Salary</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type="number"
					label="Amount"
					fullWidth
					value={formData.amount}
					onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type="date"
					label="Date"
					fullWidth
					value={formData.date}
					onChange={(e) => setFormData({ ...formData, date: e.target.value })}
				/>
			</Grid>
			<Grid item xs>
				<Button
					variant="outlined"
					color="primary"
					fullWidth
					style={{ marginTop: "20px" }}
					onClick={createTransaction}
				>
					Create
				</Button>
			</Grid>
		</Grid>
	);
};

export default Form;
