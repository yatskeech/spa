import { Box, Container, Divider } from '@mui/material';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import styles from './Header.module.scss';
import clsx from 'clsx';

export function Header() {
	const getClassName = ({ isActive }: NavLinkRenderProps) =>
		isActive ? clsx(styles['active'], styles['link']) : styles['link'];

	return (
		<Container component="header">
			<Box className={styles['box']}>
				<NavLink to="/" className={getClassName}>
					Home
				</NavLink>
				<NavLink to="/albums" className={getClassName}>
					Albums
				</NavLink>
				<NavLink to="/users" className={getClassName}>
					Users
				</NavLink>
			</Box>
			<Divider />
		</Container>
	);
}
