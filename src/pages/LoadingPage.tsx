import { CircularProgress, Container } from '@mui/material';

export function LoadingPage() {
	return (
		<Container
			sx={{
				height: 400,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<CircularProgress size={80} color="primary" />
		</Container>
	);
}
