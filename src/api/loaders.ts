import { defer, LoaderFunctionArgs } from 'react-router-dom';
import {
	getAlbum,
	getAlbums,
	getAlbumsByUserId,
	getPhotosByAlbumId,
	getUser,
	getUsers,
} from './api.ts';

export async function loadAlbums() {
	return defer({ albums: getAlbums() });
}

export async function loadAlbum({ params }: LoaderFunctionArgs) {
	const album = getAlbum(Number(params.id));
	const users = getUsers();
	const photos = getPhotosByAlbumId(Number(params.id));

	return defer({ album, users, photos });
}

export async function loadUsers() {
	return defer({ users: getUsers() });
}

export async function loadUser({ params }: LoaderFunctionArgs) {
	return defer({
		user: getUser(Number(params.id)),
		albums: getAlbumsByUserId(Number(params.id)),
	});
}
