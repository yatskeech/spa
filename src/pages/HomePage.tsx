import { Box, Container, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Paragraph, Title } from '../components';

export function HomePage() {
	return (
		<Container>
			<Title>Home Page</Title>
			<Paragraph>
				This project is a web application developed using <b>React</b>,{' '}
				<b>React Router</b> and <b>Material-UI</b> that allows users to interact
				with user and album data obtained through the <b>JSONPlaceholder API</b>
				. The application provides an intuitive interface to view a list of
				users and their albums.
			</Paragraph>
			<Paragraph>
				Users can easily find information by selecting a specific user to see
				all of their albums. I tried to create a convenient and effective
				solution for managing and viewing media content, making it accessible to
				everyone.
			</Paragraph>
			<Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', p: 2 }}>
				<Link component={RouterLink} to="/albums" underline="none">
					Go to albums
				</Link>
				<Link component={RouterLink} to="/users" underline="none">
					Go to users
				</Link>
			</Box>
		</Container>
	);
}
