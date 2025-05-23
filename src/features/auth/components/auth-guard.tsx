'use client';

import { Spinner } from '@/components/shared/spinner';
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

	if (!token)
		return (
			<div className='flex items-center justify-center w-full h-screen'>
				<Spinner />
			</div>
		);

	return <>{children}</>;
};
