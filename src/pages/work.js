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

const WorkPage = () => {
	return (
		<Layout>
			<div className={styles.page}>
				<div className={large}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" sx={{ color: 'text.primary ' }}>
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
						</CardActions>
					</Card>
				</div>
			</div>
		</Layout>
	);
};

export default WorkPage;
