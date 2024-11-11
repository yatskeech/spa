import { Box, Container, Link } from '@mui/material';
import { Paragraph, Title } from '../components';
import { Link as RouterLink } from 'react-router-dom';

export function NotFoundPage() {
	return (
		<Container>
			<Title>Incorrect Page</Title>
			<Paragraph>
				Unfortunately, the requested page does not exist. Please, use the links
				provided.
			</Paragraph>
			<Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', p: 2 }}>
				<Link component={RouterLink} to="/" underline="none">
					Go to home
				</Link>
			</Box>
		</Container>
	);
}
