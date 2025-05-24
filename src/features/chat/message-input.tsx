'use client';

import { Spinner } from '@/components/shared/spinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendIcon } from 'lucide-react';
import { FC, KeyboardEvent, useState } from 'react';

type Props = {
	sendMessage: (text: string) => void;
	loading: boolean;
};

export const MessageInput: FC<Props> = ({ sendMessage, loading }) => {
	const [inputValue, setInputValue] = useState('');

	const handleSend = () => {
		if (!inputValue.trim()) return;
		sendMessage(inputValue);
		setInputValue('');
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleSend();
		}
	};

	return (
		<div className='flex items-center gap-2'>
			<Input
				className='w-full rounded-lg'
				placeholder='Введите сообщение...'
				type='text'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button
				onClick={handleSend}
				className='rounded-xl cursor-pointer p-0'
				disabled={!inputValue.trim() || loading}
			>
				<div className='p-3 w-[40px] h-[40px] flex items-center justify-center'>
					{loading ? <Spinner className='border-2' /> : <SendIcon />}
				</div>
			</Button>
		</div>
	);
};
