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
import { Link, useStaticQuery, graphql } from 'gatsby';

const WorkPage = () => {
	return (
		<Layout>
			<div className={styles.page}>
				<div className={large}>
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={2}>
							<Grid item xs={3}>
								<Card sx={{ maxWidth: 345 }} disableFocusRipple={true}>
									<CardMedia
										component="img"
										alt="green iguana"
										height="220"
										image="https://jayjariwala.github.io/jayjariwala-archive/assets/img/wikimedia.png"
									/>
									<CardContent>
										<h3>Wikihunt</h3>
										<p>Search wikipeadia Articles using Wikimedia API</p>
										<br />
										<hr />
										<div className={styles.chipContainer}>
											<span className={styles.chip}>Html</span>
											<span className={styles.chip}>css</span>
											<span className={styles.chip}>javascript</span>
											<span className={styles.chip}>wikimedia api</span>
										</div>
									</CardContent>
									<CardActions>
										<Link
											to="https://jayjariwala.github.io/jayjariwala-archive/WikiHunt/index.html"
											target="_blank"
											className={`${btn} ${btnPrimary} ${btnSm} ${linkBtn} `}
										>
											View
										</Link>
										<Link to="https://github.com/jayjariwala/wikihunt" target="_blank" className={`${btn} ${btnSecondary} ${btnSm} ${linkBtn} `}>
											Source Code
										</Link>
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
