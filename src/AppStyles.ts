import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	grayButton: {
		color: theme.palette.text.secondary,
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
	trailer: {
		width: 560,
		height: 315,
		overflow: "hidden",
		borderRadius: 5,
	},
}));

export default useStyles;
