import { getProfile } from '@/features/profile/profile-service';
import { useAuthStore } from '@/lib/store/authStore';
import { useUserStore } from '@/lib/store/userStore';
import { useQuery } from '@tanstack/react-query';

export const useProfile = () => {
	const { current } = useUserStore();
	const { userId } = useAuthStore();

	return useQuery({
		queryKey: ['user', userId],
		queryFn: () => getProfile(userId!),
		enabled: current === null && !!userId,
	});
};
