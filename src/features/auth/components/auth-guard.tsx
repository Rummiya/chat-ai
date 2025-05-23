'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { useAuthStore } from '@/lib/store/authStore';
import { useEffect } from 'react';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
	const token = useAuthStore(state => state.token);
	const router = useRouter();

	useEffect(() => {
		if (!token) {
			router.push('/auth/login');
		}
	}, [token, router]);

	if (!token) return null;

	return <>{children}</>;
};
