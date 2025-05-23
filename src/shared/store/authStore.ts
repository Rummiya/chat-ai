// src/store/auth-store.ts
import { create } from 'zustand';

interface AuthState {
	token: string | null;
	userId: string | null;
	setAuth: (token: string, userId: string) => void;
	logout: () => void;
	initFromStorage: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
	token: null,
	userId: null,
	setAuth: (token, userId) => {
		localStorage.setItem('token', token);
		localStorage.setItem('userId', userId);
		set({ token, userId });
	},
	logout: () => {
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
		set({ token: null, userId: null });
	},
	initFromStorage: () => {
		const token = localStorage.getItem('token');
		const userId = localStorage.getItem('userId');
		if (token && userId) set({ token, userId });
	},
}));
