import { Container, Grid2 as Grid, Link } from '@mui/material';
import { Title } from '../components';
import { useLoaderData, Await, Link as RouterLink } from 'react-router-dom';
import { Album } from '../interfaces';
import { Suspense } from 'react';
import { LoadingPage } from './LoadingPage.tsx';
import CollectionsIcon from '@mui/icons-material/Collections';

export function AlbumsPage() {
	const { albums } = useLoaderData() as { albums: Promise<Album[]> };

	return (
		<Container>
			<Suspense fallback={<LoadingPage />}>
				<Title>Albums</Title>
				<Await resolve={albums}>
					{(resolvedAlbums: Album[]) => (
						<Grid container columnSpacing={4} rowSpacing={1} direction="row">
							{resolvedAlbums.map(({ id, title }) => (
								<Grid
									key={id}
									size={6}
									sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
								>
									<CollectionsIcon color="secondary" />
									<Link
										component={RouterLink}
										to={id.toString()}
										color="secondary"
									>
										{title}
									</Link>
								</Grid>
							))}
						</Grid>
					)}
				</Await>
			</Suspense>
		</Container>
	);
}
