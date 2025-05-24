'use client';

import { Spinner } from '@/components/shared/spinner';
import { useRouter } from '@/lib/i18n/navigation';
import { useAuthStore } from '@/lib/store/authStore';
import { useEffect, useState } from 'react';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
	const [isMounted, setIsMounted] = useState(false);
	const storeToken = useAuthStore(state => state.token);
	const router = useRouter();

	// Дождись полной инициализации клиента
	useEffect(() => {
		setIsMounted(true);
	}, []);

	const localToken = isMounted ? localStorage.getItem('token') : null;
	const token = storeToken || localToken;

	useEffect(() => {
		if (isMounted && !token) {
			router.push('/auth/login');
		}
	}, [token, router, isMounted]);

	if (!token) {
		return (
			<div className='flex items-center justify-center w-full h-screen'>
				<Spinner />
			</div>
		);
	}

	return <>{children}</>;
};
