import React from "react";
import Details from "./components/Details/Details";
import { Grid, useMediaQuery } from "@mui/material";
import Main from "./components/Main/Main";

const App = () => {
	const isSmallScreen = useMediaQuery("(max-width:600px)");

	return (
		<div>
			<Grid
				container
				spacing={isSmallScreen ? 6 : 2}
				alignItems="center"
				justifyContent="center"
				style={{ height: "100vh", marginTop: isSmallScreen ? "20px" : "0px" }}
			>
				<Grid
					item
					xs={11}
					sm={4}
					style={{ display: isSmallScreen ? "none" : "block" }}
				>
					<Details title="Income" />
				</Grid>
				<Grid item xs={11} sm={3} sx={{ paddingBottom: { sm: "5%" } }}>
					<Main />
				</Grid>
				<Grid
					item
					xs={11}
					sm={4}
					style={{ display: isSmallScreen ? "block" : "none" }}
				>
					<Details title="Income" />
				</Grid>
				<Grid
					item
					xs={11}
					sm={4}
					style={{ paddingBlockEnd: isSmallScreen ? "100px" : "0px" }}
				>
					<Details title="Expense" />
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
