import React from "react";
import Details from "./components/Details/Details";
import { Grid } from "@mui/material";
import Main from "./components/Main/Main";

const App = () => {
	return (
		<div>
			<Grid
				container
				spacing={1}
				alignItems="center"
				justifyContent="center"
				style={{ height: "100vh" }}
				sx={{
					"& > *": {
						margin: (theme) => theme.spacing(1),
					},
					height: "100vh",
				}}
			>
				<Grid item xs={12} sm={4}>
					<Details title="Income" />
				</Grid>
				<Grid item xs={12} sm={3} sx={{ paddingBottom: { sm: "5%" } }}>
					<Main />
				</Grid>
				<Grid item xs={12} sm={4}>
					<Details title="Expense" />
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
