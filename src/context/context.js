import { createContext, useReducer } from "react";
import contextReducer from "./reducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
	const [tracnsactions, dispatch] = useReducer(contextReducer, initialState);

	const deleteTransaction = (id) =>
		dispatch({ type: "DELETE_TRANSACTION", payload: id });
	const addTransaction = (transaction) =>
		dispatch({ type: "ADD_TRANSACTION", payload: transaction });

	return (
		<ExpenseTrackerContext.Provider
			value={{ deleteTransaction, addTransaction }}
		>
			{children}
		</ExpenseTrackerContext.Provider>
	);
};
