import { Container, Grid2 as Grid, Link } from '@mui/material';
import { Title } from '../components';
import { useLoaderData, Link as RouterLink } from 'react-router-dom';
import { Album } from '../types';
import CollectionsIcon from '@mui/icons-material/Collections';

export function AlbumListPage() {
	const albums = useLoaderData() as Album[];

	return (
		<Container>
			<Title>Albums</Title>
			<Grid container columnSpacing={4} rowSpacing={1} direction="row">
				{albums.map(({ id, title }) => (
					<Grid
						key={id}
						size={6}
						sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
					>
						<CollectionsIcon color="secondary" />
						<Link component={RouterLink} to={id.toString()} color="secondary">
							{title}
						</Link>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
