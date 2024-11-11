import { Await, Link as RouterLink, useLoaderData } from 'react-router-dom';
import { Album, User } from '../types';
import {
	Box,
	Container,
	Link,
	List,
	ListItem,
	Typography,
} from '@mui/material';
import { Title } from '../components';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Suspense } from 'react';
import { LoadingPage } from './';

export function UserPage() {
	const { user, albums } = useLoaderData() as {
		user: Promise<User>;
		albums: Promise<Album[]>;
	};

	return (
		<Container>
			<Suspense fallback={<LoadingPage />}>
				<Await resolve={Promise.all([user, albums])}>
					{([resolvedUser, resolvedAlbums]: [User, Album[]]) => (
						<>
							<Title>{resolvedUser.name}</Title>
							<Box>
								<Typography
									variant="body1"
									color="secondary"
									sx={{ textAlign: 'center' }}
								>
									<b>Email:</b> {resolvedUser.email}
								</Typography>
								<Typography
									variant="body1"
									color="secondary"
									sx={{ textAlign: 'center' }}
								>
									<b>Phone:</b> {resolvedUser.phone}
								</Typography>
								<Typography
									variant="body1"
									color="secondary"
									sx={{ textAlign: 'center' }}
								>
									<b>Site:</b> {resolvedUser.website}
								</Typography>
							</Box>
							<Box>
								<Typography variant="h6">Albums</Typography>
								<List>
									{resolvedAlbums.map(({ id, title }) => (
										<ListItem
											sx={{
												p: 0.5,
												display: 'flex',
												alignItems: 'center',
												gap: 1,
											}}
										>
											<CollectionsIcon color="secondary" />
											<Link
												component={RouterLink}
												to={`/albums/${id}`}
												color="secondary"
											>
												{title}
											</Link>
										</ListItem>
									))}
								</List>
							</Box>
						</>
					)}
				</Await>
			</Suspense>
		</Container>
	);
}
