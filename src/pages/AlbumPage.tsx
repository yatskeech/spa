import { Box, Container, ImageList, ImageListItem, Link } from '@mui/material';
import { Await, Link as RouterLink } from 'react-router-dom';
import { Title } from '../components';
import { useLoaderData } from 'react-router-dom';
import { Album, Photo, User } from '../types';
import { Suspense } from 'react';
import { LoadingPage } from './';

export function AlbumPage() {
	const { album, users, photos } = useLoaderData() as {
		album: Promise<Album>;
		users: Promise<User[]>;
		photos: Promise<Photo[]>;
	};

	return (
		<Container>
			<Suspense fallback={<LoadingPage />}>
				<Await resolve={Promise.all([album, users, photos])}>
					{([resolvedAlbum, resolvedUsers, resolvedPhotos]: [
						Album,
						User[],
						Photo[],
					]) => {
						const user = resolvedUsers.find(
							(user) => user.id === resolvedAlbum.userId
						) as User;

						return (
							<>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										mb: 2,
									}}
								>
									<Title>{resolvedAlbum.title}</Title>
									<Link
										component={RouterLink}
										to={`/users/${user.id}`}
										color="secondary"
									>
										{user.name}
									</Link>
								</Box>
								<ImageList cols={3}>
									{resolvedPhotos.map((photo) => (
										<ImageListItem
											key={photo.id}
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}
										>
											<img src={photo.url} alt={photo.title} />
										</ImageListItem>
									))}
								</ImageList>
							</>
						);
					}}
				</Await>
			</Suspense>
		</Container>
	);
}
