import { Typography } from '@mui/material';
import { ReactNode } from 'react';

interface TitleProps {
	children: ReactNode;
}

export function Title({ children }: TitleProps) {
	return (
		<Typography
			variant="h4"
			component="h1"
			sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}
		>
			{children}
		</Typography>
	);
}
