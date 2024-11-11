import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layouts';
import {
	AlbumPage,
	AlbumListPage,
	ErrorPage,
	HomePage,
	UserListPage,
	UserPage,
	NotFoundPage,
} from '../pages';
import { loadAlbum, loadAlbums, loadUser, loadUsers } from '../api';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						index: true,
						element: <HomePage />,
					},
					{
						path: 'albums',
						element: <AlbumListPage />,
						loader: loadAlbums,
					},
					{
						path: 'albums/:id',
						element: <AlbumPage />,
						loader: loadAlbum,
					},
					{
						path: 'users',
						element: <UserListPage />,
						loader: loadUsers,
					},
					{
						path: 'users/:id',
						element: <UserPage />,
						loader: loadUser,
					},
					{
						path: '*',
						element: <NotFoundPage />,
					},
				],
			},
		],
	},
]);
