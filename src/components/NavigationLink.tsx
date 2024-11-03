import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { ReactNode } from 'react';

interface NavigationLinkProps {
	to: string;
	children: ReactNode;
}

export function NavigationLink({ to, children }: NavigationLinkProps) {
	return (
		<Link
			component={NavLink}
			to={to}
			underline="none"
			color="primary"
			sx={{
				transition: 'color 0.25s',
				'&:hover': { color: (theme) => theme.palette.primary.light },
				'&.active': {
					color: (theme) => theme.palette.primary.main,
					fontWeight: 'bold',
				},
			}}
		>
			{children}
		</Link>
	);
}
