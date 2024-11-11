import { Box, Container, Link } from '@mui/material';
import { Paragraph, Title } from '../components';
import { Link as RouterLink, useRouteError } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface ErrorData {
	title: string;
	description: string;
}

export function ErrorPage() {
	const [errorData, setErrorData] = useState<ErrorData | null>(null);
	const error = useRouteError() as Response;

	useEffect(() => {
		error.json().then((data) => setErrorData(data));
	}, [error]);

	if (!errorData) return null;

	return (
		<Container>
			<Title>{errorData.title}</Title>
			<Paragraph>{errorData.description}</Paragraph>
			<Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', p: 2 }}>
				<Link component={RouterLink} to="/" underline="none">
					Go to home
				</Link>
			</Box>
		</Container>
	);
}
