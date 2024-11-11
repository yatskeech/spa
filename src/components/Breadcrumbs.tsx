import { Breadcrumbs as MUIBreadcrumbs, Link } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

export function Breadcrumbs() {
	const location = useLocation();
	const arrayPath = location.pathname.split('/').filter((path) => path !== '');

	if (arrayPath.length < 2) {
		return null;
	}

	return (
		<MUIBreadcrumbs>
			{arrayPath.map((path, index) => (
				<Link
					key={index}
					color={arrayPath.length === index + 1 ? 'primary' : 'secondary'}
					underline="hover"
					component={RouterLink}
					textTransform="capitalize"
					to={arrayPath.slice(0, index + 1).join('/')}
				>
					{path}
				</Link>
			))}
		</MUIBreadcrumbs>
	);
}
