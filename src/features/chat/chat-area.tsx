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

export const ChatArea = () => {
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

	useEffect(() => {
		scrollToBottom(scrollRef);
	}, [messages]);

	return (
		<div className='flex flex-col h-full px-10 max-md:px-0'>
			<h2 className='text-xl font-semibold py-4'>{t('title')}</h2>

			<div
				ref={scrollRef}
				className='flex-1 overflow-y-auto rounded-xl py-4 px-10 max-md:px-5 scroll-smooth bg-blue-500/10'
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

			<div className=' py-2'>
				<MessageInput sendMessage={sendMessage} loading={loading} />
			</div>
		</div>
	);
};
