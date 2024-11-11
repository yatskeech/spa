import { Container, Grid2, Link } from '@mui/material';
import { Title } from '../components';
import { useLoaderData, Link as RouterLink, Await } from 'react-router-dom';
import { Album } from '../types';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Suspense } from 'react';
import { LoadingPage } from './';

export function AlbumListPage() {
	const { albums } = useLoaderData() as { albums: Promise<Album[]> };

	return (
		<Container>
			<Suspense fallback={<LoadingPage />}>
				<Await resolve={albums}>
					{(resoledAlbums: Album[]) => (
						<>
							<Title>Albums</Title>
							<Grid2 container columnSpacing={4} rowSpacing={1} direction="row">
								{resoledAlbums.map(({ id, title }) => (
									<Grid2
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
									</Grid2>
								))}
							</Grid2>
						</>
					)}
				</Await>
			</Suspense>
		</Container>
	);
}
