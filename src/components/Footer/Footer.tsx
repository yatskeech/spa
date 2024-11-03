import { Box, Container, Divider, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './Footer.module.scss';

export function Footer() {
	return (
		<Container component="footer">
			<Divider />
			<Box className={styles['box']}>
				<Link href="https://github.com/yatskeech" className={styles['link']}>
					<GitHubIcon /> github.com/yatskeech
				</Link>
				<Typography component="span">API & SPA, 2024</Typography>
			</Box>
		</Container>
	);
}
