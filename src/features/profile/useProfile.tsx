'use client';

import { getProfile } from '@/features/profile/profile-service';
import { useAuthStore } from '@/shared/store/authStore';
import { useQuery } from '@tanstack/react-query';

export const useProfile = () => {
	const id =
		useAuthStore(state => state.userId) || localStorage.getItem('userId');

	return useQuery({
		queryKey: ['user', id],
		queryFn: () => getProfile(id!),
		enabled: !!id,
	});
};
