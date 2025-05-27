// src/store/auth-store.ts
import { TUser } from '@/types';
import { create } from 'zustand';

interface UserState {
	current: TUser | null;
	setCurrent: (current: TUser) => void;
	clearCurrent: () => void;
}

export const useUserStore = create<UserState>(set => ({
	current: null,
	setCurrent: current => set({ current }),
	clearCurrent: () => set({ current: null }),
}));
