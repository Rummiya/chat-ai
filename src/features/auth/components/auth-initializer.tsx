'use client';

import { useAuthStore } from '@/lib/store/authStore';
import { useEffect } from 'react';

export const AuthInitializer = () => {
	const initFromStorage = useAuthStore(state => state.initFromStorage);

	useEffect(() => {
		initFromStorage();
	}, [initFromStorage]);

	return null; // ничего не рендерит
};
