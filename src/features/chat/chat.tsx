'use client';

import { ChatMessage } from '@/components/shared/chat-message';
import { MessageInput } from './message-input';

import { useChatStore } from '@/lib/store/chatStore';
import { useUserStore } from '@/lib/store/userStore';
import { useEffect, useRef, useState } from 'react';

import { getMessageTime } from '@/lib/utils/getMessageTime';
import { scrollToBottom } from '@/lib/utils/scrollToBottom';

import { TChatMessage } from '@/types';
import { useTranslations } from 'next-intl';

export const ChatBlock = () => {
	const { addMessages, messages } = useChatStore();
	const currentUser = useUserStore(state => state.current);
	const [loading, setLoading] = useState(false);
	const scrollRef = useRef<HTMLDivElement | null>(null);
	const t = useTranslations('chat');

	const sendMessage = (text: string) => {
		if (!text) return;
		setLoading(true);

		const newMsg = {
			text,
			author: currentUser?.email,
			isOwn: true,
			timestamp: getMessageTime(),
		} as TChatMessage;

		addMessages(newMsg);

		setTimeout(() => {
			addMessages({
				text,
				author: 'ai',
				timestamp: getMessageTime(),
			});
			setLoading(false);
		}, 1000);
	};

	// автоскролл вниз при каждом новом сообщении
	useEffect(() => {
		scrollToBottom(scrollRef);
	}, [messages]);

	return (
		<div className='h-full flex flex-col gap-3 justify-between px-10'>
			<h2 className='text-xl font-semibold'>{t('title')}</h2>

			<div
				ref={scrollRef}
				className='flex-1 w-full h-full max-h-[500px] bg-muted overflow-auto rounded-xl py-4 px-10 scroll-smooth'
			>
				{messages.map(({ text, author, isOwn, timestamp }, index) => (
					<ChatMessage
						key={index}
						text={text}
						author={author}
						isOwn={isOwn}
						timestamp={timestamp}
					/>
				))}
			</div>

			<MessageInput sendMessage={sendMessage} loading={loading} />
		</div>
	);
};
