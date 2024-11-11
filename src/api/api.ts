import { json } from 'react-router-dom';
import { Album, Photo, User } from '../types';

const API_URL: string = 'https://jsonplaceholder.typicode.com/';

export async function getUser(id: number): Promise<User> {
	const response = await fetch(API_URL + 'users/' + id);

	if (!response.ok) {
		throw json(
			{
				title: 'User not found',
				description:
					'The requested user is not available or cannot be accessed.',
			},
			{ status: 404 }
		);
	}

	return response.json();
}

export async function getUsers(): Promise<User[]> {
	const response = await fetch(API_URL + 'users');

	if (!response.ok) {
		throw json(
			{
				title: 'Users not found',
				description: 'No users are available or accessible at the moment.',
			},
			{ status: 404 }
		);
	}

	return response.json();
}

export async function getAlbum(id: number): Promise<Album> {
	const response = await fetch(API_URL + 'albums/' + id);

	if (!response.ok) {
		throw json(
			{
				title: 'Album not found',
				description:
					'The requested album is not available or cannot be accessed.',
			},
			{ status: 404 }
		);
	}

	return response.json();
}

export async function getAlbums(): Promise<Album[]> {
	const response = await fetch(API_URL + 'albums');

	if (!response.ok) {
		throw json(
			{
				title: 'Albums not found',
				description: 'No albums are available or accessible at the moment.',
			},
			{ status: 404 }
		);
	}

	return response.json();
}

export async function getAlbumsByUserId(id: number): Promise<Album[]> {
	const response = await fetch(API_URL + 'albums?userId=' + id);

	if (!response.ok) {
		throw json(
			{
				title: 'Albums not found',
				description: 'No Albums are available or accessible at the moment.',
			},
			{ status: 404 }
		);
	}

	return response.json();
}

export async function getPhotosByAlbumId(albumId: number): Promise<Photo[]> {
	const response = await fetch(API_URL + 'photos?albumId=' + albumId);

	if (!response.ok) {
		throw json(
			{
				title: 'Photos not found',
				description: 'No photos are available or accessible at the moment.',
			},
			{ status: 404 }
		);
	}

	return response.json();
}
