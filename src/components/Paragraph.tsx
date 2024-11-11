import { Typography } from '@mui/material';
import { ReactNode } from 'react';

interface ParagraphProps {
	children: ReactNode;
}

export function Paragraph({ children }: ParagraphProps) {
	return (
		<Typography
			variant="body2"
			component="p"
			sx={{ maxWidth: '70%', margin: '0 auto', textAlign: 'center', py: 0.5 }}
		>
			{children}
		</Typography>
	);
}
