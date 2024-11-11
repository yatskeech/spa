import { Breadcrumbs, Footer, Header } from '../components';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

export function Layout() {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			<Header />
			<Container component="main" sx={{ flexGrow: 1, p: 4 }}>
				<Breadcrumbs />
				<Outlet />
			</Container>
			<Footer />
		</Box>
	);
}
