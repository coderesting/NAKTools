import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
