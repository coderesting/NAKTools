import React from "react";
import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Container,
	CssBaseline,
	Grid,
	Typography,
} from "@material-ui/core";
import useStyles from "./AppStyles";
import toolDescriptions from "./toolDescriptions";

function App() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<main>
				<Box p={2} mb={2}>
					<Grid className={classes.header} container spacing={4}>
						<Grid item>
							<img
								className={classes.headerImg}
								src="assets/NAKToolsIcon-192x192.png"
								alt="NAK Tools"
							/>
						</Grid>
						<Grid item className={classes.headerText}>
							<Typography variant="h5" color="textSecondary">
								This collection of tools makes your life as a Nordakademie
								Student easier. You are invited to spread the word about these
								tools.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Container maxWidth="sm">
					<Typography
						variant="h5"
						align="center"
						color="textSecondary"
						paragraph
					>
						You have an idea for a small tool?
					</Typography>
					<Box display="flex" justifyContent="center">
						<ButtonGroup color="primary">
							<Button href="mailto:yannick.brandt@nordakademie.de">
								Write an e-mail
							</Button>
							<Button href="https://github.com/coderesting/NAKTools/issues/new">
								Submit an issue
							</Button>
						</ButtonGroup>
					</Box>
				</Container>

				<Box m="auto" maxWidth="1100px" p={3}>
					<Grid container spacing={4}>
						{toolDescriptions.map((tool, index) => (
							<Grid key={index} item xs={12} sm={6} md={4}>
								<Card raised className={classes.card}>
									<CardActionArea className={classes.cardActionArea}>
										<a href={tool.appUrl} rel="noreferrer">
											<img
												className={classes.cardImg}
												src={tool.image}
												alt={tool.name}
											/>
										</a>
									</CardActionArea>
									<CardContent>
										<Typography gutterBottom variant="h5">
											{tool.name}
										</Typography>
										<Typography>{tool.description}</Typography>
									</CardContent>

									<CardActions className={classes.cardActions}>
										<Button
											href={tool.appUrl}
											color="primary"
											variant="contained"
										>
											Launch
										</Button>
										<Button
											href={tool.repoUrl}
											color="primary"
											variant="outlined"
										>
											Contribute
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>

				<Box>
					<Typography variant="h5" align="center" color="textSecondary">
						Collaborators:
					</Typography>
					<Box justifyContent="center" display="flex">
						<a href="https://github.com/coderesting">
							<Avatar
								className={classes.avatar}
								alt="Yannick"
								src="https://avatars.githubusercontent.com/u/17936518?s=60&v=4"
							/>
						</a>
						<a href="https://github.com/jeff-saupe">
							<Avatar
								className={classes.avatar}
								alt="Jeff"
								src="https://avatars.githubusercontent.com/u/46161762?s=60&v=4"
							/>
						</a>
					</Box>
				</Box>

				<Box display="flex" justifyContent="center" m={1}>
					<Button
						href="https://github.com/orgs/Nordakademie-Students/teams"
						color="primary"
						variant="outlined"
					>
						Join on Github
					</Button>
				</Box>
			</main>
		</>
	);
}

export default App;
