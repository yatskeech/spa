import { Box, Container, Divider } from '@mui/material';
import { NavigationLink } from './NavigationLink.tsx';

export function Header() {
	return (
		<Container component="header">
			<Box sx={{ p: 4, display: 'flex', justifyContent: 'end', gap: 4 }}>
				<NavigationLink to="/">Home</NavigationLink>
				<NavigationLink to="/albums">Albums</NavigationLink>
				<NavigationLink to="/users">Users</NavigationLink>
			</Box>
			<Divider />
		</Container>
	);
}
