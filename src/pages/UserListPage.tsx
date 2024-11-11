import { Container, Link, List, ListItem } from '@mui/material';
import { Title } from '../components';
import { useLoaderData, Link as RouterLink, Await } from 'react-router-dom';
import { User } from '../types';
import PersonIcon from '@mui/icons-material/Person';
import { Suspense } from 'react';
import { LoadingPage } from './';

export function UserListPage() {
	const { users } = useLoaderData() as { users: Promise<User[]> };

	return (
		<Container>
			<Suspense fallback={<LoadingPage />}>
				<Await resolve={users}>
					{(resolvedUsers: User[]) => (
						<>
							<Title>Users</Title>
							<List>
								{resolvedUsers.map(({ id, name }) => (
									<ListItem
										key={id}
										sx={{
											p: 0.5,
											display: 'flex',
											alignItems: 'center',
											gap: 1,
										}}
									>
										<PersonIcon color="secondary" />
										<Link
											component={RouterLink}
											to={id.toString()}
											color="secondary"
										>
											{name}
										</Link>
									</ListItem>
								))}
							</List>
						</>
					)}
				</Await>
			</Suspense>
		</Container>
	);
}
