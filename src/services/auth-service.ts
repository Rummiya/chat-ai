const BASE_URL = 'https://682dbcc44fae188947575108.mockapi.io';

export async function registerUser(email: string, password: string) {
	const res = await fetch(`${BASE_URL}/api/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	});

	if (!res.ok) throw new Error('Failed to register');
	return res.json();
}

export async function loginUser(email: string, password: string) {
	const res = await fetch(`${BASE_URL}/api/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	});

	const user = await res.json();
	if (!user) throw new Error('Invalid credentials');

	return { token: btoa(user.email), user };
}
