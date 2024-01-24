import { Alert, Snackbar } from "@mui/material";
import React from "react";

const CustomizedSnackBar = ({ open, setOpen }) => {
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};
	return (
		<div style={{ width: "100%", marginInlineStart: "16px" }}>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
			>
				<Alert
					onClose={handleClose}
					severity="success"
					elevation={6}
					variant="filled"
					sx={{ width: "100%" }}
				>
					Transaction Successfully Created!
				</Alert>
			</Snackbar>
		</div>
	);
};

export default CustomizedSnackBar;
