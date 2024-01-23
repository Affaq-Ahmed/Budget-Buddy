import React, { useContext } from "react";
import {
	Avatar,
	IconButton,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
	List as MUIList,
	Slide,
} from "@mui/material";
import { Delete, MoneyOff } from "@mui/icons-material";
import { ExpenseTrackerContext } from "../../context/context";

const List = () => {
	const { appName } = useContext(ExpenseTrackerContext);

	const transactions = [
		{
			id: 1,
			type: "Income",
			category: "Salary",
			amount: 50,
			date: "Wednesday",
		},
		{
			id: 2,
			type: "Expense",
			category: "Nimko",
			amount: 10,
			date: "Wednesday",
		},
		{
			id: 3,
			type: "Expense",
			category: "Noodles",
			amount: 40,
			date: "Thursday",
		},
	];

	return (
		<MUIList
			dense
			style={{
				maxHeight: "150px",
				overflow: "auto",
			}}
		>
			{transactions.map((transaction) => (
				<Slide
					direction="down"
					in
					mountOnEnter
					unmountOnExit
					key={transaction.id}
				>
					<ListItem>
						<ListItemAvatar>
							<Avatar
								style={{
									color: `${transaction.type === "Income" ? "#fff" : "#eee"}`,
									backgroundColor: `${
										transaction.type === "Income" ? "green" : "red"
									}`,
								}}
							>
								<MoneyOff />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={transaction.category}
							secondary={`$${transaction.amount} - ${transaction.date} `}
						/>
						<ListItemSecondaryAction>
							<IconButton edge="end" aria-label="delete" onClick={() => {}}>
								<Delete />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</Slide>
			))}
		</MUIList>
	);
};

export default List;
