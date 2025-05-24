import { loginUser, registerUser } from '@/features/auth/auth-service';
import { useAuthStore } from '@/lib/store/authStore';
import { TUser } from '@/types';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
	return useMutation({
		mutationFn: ({ email, password }: Omit<TUser, 'id'>) =>
			registerUser(email, password),
	});
};

export const useLogin = () => {
	const { setAuth } = useAuthStore();

	return useMutation({
		mutationFn: ({ email, password }: Omit<TUser, 'id'>) =>
			loginUser(email, password),
		onSuccess: ({ token, user }) => {
			setAuth(token, user.id);
		},
	});
};
