import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	header: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 0, 2),
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	headerImg: {
		width: 150,
	},
	headerText: {
		maxWidth: 410,
		minWidth: 410,
		[theme.breakpoints.down("xs")]: {
			textAlign: "center",
			minWidth: "auto",
		},
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	cardActionArea: {
		background: theme.palette.primary.dark,
	},
	cardImg: {
		width: "100%",
		height: "100%",
		padding: "5% 30%",
	},
	cardActions: {
		padding: theme.spacing(2),
	},
	avatar: {
		margin: theme.spacing(1),
	},
}));

export default useStyles;
