import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { ExpenseTrackerContext } from '../../context/context';
import { v4 as uuidv4 } from 'uuid';
import {
	incomeCategories,
	expenseCategories,
} from '../../constants/categories';
import { formatDate } from '../../utils/formatDate';
import CustomizedSnackBar from '../Snackbar/Snackbar';

const initialState = {
	amount: '',
	category: '',
	type: 'Income',
	itemName: '',
	date: formatDate(new Date()),
};

const Form = () => {
	const [formData, setFormData] = useState(initialState);
	const [open, setOpen] = useState(false);
	const { addTransaction } = useContext(
		ExpenseTrackerContext
	);

	const createTransaction = () => {
		if (
			Number.isNaN(Number(formData.amount)) ||
			!formData.date.includes('-') ||
			!formData.amount ||
			!formData.category
		)
			return;
		if (
			!incomeCategories
				.map((iC) => iC.type)
				.includes(formData.category) &&
			!expenseCategories
				.map((iC) => iC.type)
				.includes(formData.category)
		)
			return;
		const transaction = {
			...formData,
			amount: Number(formData.amount),
			id: uuidv4(),
		};
		console.log(transaction);
		addTransaction(transaction);
		setFormData(initialState);
		setOpen(true);
	};

	const selectedCategories =
		formData.type === 'Income'
			? incomeCategories
			: expenseCategories;

	return (
		<Grid
			container
			spacing={2}
			style={{ marginBlockEnd: '-10px' }}
		>
			<CustomizedSnackBar open={open} setOpen={setOpen} />
			<Grid item xs={12}>
				<Typography
					variant='subtitle2'
					align='center'
					gutterBottom
				>
					...
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Type</InputLabel>
					<Select
						value={formData.type}
						onChange={(e) =>
							setFormData({
								...formData,
								type: e.target.value,
							})
						}
					>
						<MenuItem value='Income'>Income</MenuItem>
						<MenuItem value='Expense'>Expense</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Category</InputLabel>
					<Select
						value={formData.category}
						onChange={(e) =>
							setFormData({
								...formData,
								category: e.target.value,
							})
						}
					>
						{selectedCategories.map((category) => (
							<MenuItem
								key={category.type}
								value={category.type}
							>
								{category.type}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12}>
				<TextField
					type='text'
					label='Item Name'
					fullWidth
					value={formData.itemName}
					onChange={(e) =>
						setFormData({
							...formData,
							itemName: e.target.value,
						})
					}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type='number'
					label='Amount'
					fullWidth
					value={formData.amount}
					onChange={(e) =>
						setFormData({
							...formData,
							amount: e.target.value,
						})
					}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type='date'
					label='Date'
					fullWidth
					value={formData.date}
					onChange={(e) =>
						setFormData({
							...formData,
							date: formatDate(e.target.value),
						})
					}
				/>
			</Grid>
			<Grid item xs>
				<Button
					variant='outlined'
					color='primary'
					fullWidth
					style={{ marginTop: '20px' }}
					onClick={createTransaction}
				>
					Create
				</Button>
			</Grid>
		</Grid>
	);
};

export default Form;
