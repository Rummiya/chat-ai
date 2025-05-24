import { BASE_URL } from '@/constants';
import { TUser } from '@/types';

export const registerUser = async (email: string, password: string) => {
	const checkRes = await fetch(`${BASE_URL}/api/users?email=${email}`);
	const existingUsers = (await checkRes.json()) as TUser[];

	if (existingUsers.length > 0) {
		throw new Error('Пользователь с таким email уже существует');
	}

	const res = await fetch(`${BASE_URL}/api/users`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	});

	if (!res.ok) throw new Error('Ошибка при регистрации');

	return res.json();
};

export const loginUser = async (email: string, password: string) => {
	const res = await fetch(`${BASE_URL}/api/users?email=${email}`);

	if (res.status === 404) {
		throw new Error('Неверная почта');
	}

	const users = (await res.json()) as TUser[];

	if (!users.length) {
		throw new Error('Пользователь не найден');
	}

	const user = users[0];

	if (user.password !== password) {
		throw new Error('Неверный пароль');
	}

	return {
		token: btoa(user.email),
		user,
	};
};
