// src/store/auth-store.ts
import { User } from '@/types';
import { create } from 'zustand';

interface UserState {
	current: User | null;
	setCurrent: (current: User) => void;
	clearCurrent: () => void;
}

export const useUserStore = create<UserState>(set => ({
	current: null,
	setCurrent: current => set({ current }),
	clearCurrent: () => set({ current: null }),
}));
