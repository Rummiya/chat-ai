import { RefObject } from 'react';

export const scrollToBottom = (scrollRef: RefObject<HTMLDivElement | null>) => {
	if (!scrollRef.current) return;
	scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
};
