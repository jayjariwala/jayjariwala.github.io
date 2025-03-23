import React from 'react';
import { Layout } from 'components/layouts';
import * as styles from 'components/styles/Work.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { large } from 'components/styles/Container.module.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { btn, btnPrimary, btnSecondary, btnLg, btnSm, linkBtn, buttonGroup } from 'components/styles/Button.module.css';
import TextField from '@mui/material/TextField';

const WorkPage = () => {
	return (
		<Layout>
			<div className={styles.page}>
				<div className={large}>
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={2}>
							<Grid item xs={3}>
								<Card sx={{ maxWidth: 345 }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="140"
											image="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=3857&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
											alt="green iguana"
										/>
										<CardContent>
											<Typography gutterBottom variant="h3" component="div">
												Project1
											</Typography>

											<p>
												lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</p>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<button className={`${btn} ${btnSm} ${btnPrimary}`}>Visit</button>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</Box>
				</div>
			</div>
		</Layout>
	);
};

export default WorkPage;
