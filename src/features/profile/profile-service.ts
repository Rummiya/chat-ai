import { BASE_URL } from '@/constants';
import { TUser } from '@/types';

export const getProfile = async (id: string) => {
	const res = await fetch(`${BASE_URL}/api/users/${id}`);
	const data = (await res.json()) as TUser;

	return data;
};
