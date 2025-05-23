import { loginUser, registerUser } from '@/services/auth-service';
import { useMutation } from '@tanstack/react-query';

type User = {
	email: string;
	password: string;
};

export function useRegister() {
	return useMutation({
		mutationFn: ({ email, password }: User) => registerUser(email, password),
	});
}

export function useLogin() {
	return useMutation({
		mutationFn: ({ email, password }: User) => loginUser(email, password),
	});
}
