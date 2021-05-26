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
	CssBaseline,
	Grid,
	Typography,
} from "@material-ui/core";
import useStyles from "./AppStyles";
import toolDescriptions from "./toolDescriptions";
import Header from "./Header";

function App() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<main>
				<Header
					img="assets/NAKTools-256x256.png"
					imgAlt="NAK Tools"
					text="This collection of tools makes your life as a Nordakademie
								student easier. You are invited to spread the word about these
								tools."
				/>

				<Box display="flex" justifyContent="center" m={2}>
					<Typography variant="h5" align="center" color="textSecondary">
						You have an idea for a small tool?
					</Typography>
				</Box>

				<Box display="flex" justifyContent="center">
					<ButtonGroup color="primary">
						<Button href="https://github.com/coderesting/NAKTools/issues/new?assignees=&labels=tool+idea&template=new-nak-tool-idea.md&title=New+NAK+Tool+idea%3A+%7Binsert+name+here%7D">
							Submit via GitHub
						</Button>
						<Button href="mailto:yannick.brandt@nordakademie.de">
							Write an e-mail
						</Button>
					</ButtonGroup>
				</Box>

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
						<a href="https://github.com/IceToast">
							<Avatar
								className={classes.avatar}
								alt="Jeff"
								src="https://avatars.githubusercontent.com/u/54889359?s=60&v=4"
							/>
						</a>
					</Box>
				</Box>

				<Box display="flex" justifyContent="center" m={1}>
					<ButtonGroup color="primary">
						<Button href="https://github.com/orgs/Nordakademie-Students/teams">
							Join on Github
						</Button>
						<Button href="https://github.com/coderesting/NAKTools/issues/new?assignees=&labels=new+tool&template=new-nak-tool.md&title=New+NAK+Tool%3A+%7Binsert+name+here%7D">
							Add your tool
						</Button>
					</ButtonGroup>
				</Box>
			</main>
		</>
	);
}

export default App;
