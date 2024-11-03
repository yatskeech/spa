import { Box, Container, Divider, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './Footer.module.scss';

export function Footer() {
	return (
		<Container component="footer">
			<Divider />
			<Box sx={{ p: 4, display: 'flex', justifyContent: 'space-between' }}>
				<Link
					href="https://github.com/yatskeech"
					color="primary"
					underline="none"
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 1,
						transition: '0.25s',
						'&:hover': {
							color: '#000',
						},
					}}
				>
					<GitHubIcon /> github.com/yatskeech
				</Link>
				<Typography component="span">API & SPA, 2024</Typography>
			</Box>
		</Container>
	);
}
