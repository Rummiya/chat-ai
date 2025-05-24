import { TChatMessage } from '@/types';
import { create } from 'zustand';

interface ChatState {
	messages: TChatMessage[];
	addMessages: (msg: TChatMessage) => void;
	clearMessages: () => void;
}

export const useChatStore = create<ChatState>(set => ({
	messages: [],
	addMessages: (msg: TChatMessage) => {
		set(state => ({ messages: [...state.messages, msg] }));
	},
	clearMessages: () => set({ messages: [] }),
}));
