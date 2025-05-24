import { cn } from '@/lib/utils/cn';
import { TChatMessage } from '@/types';
import { FC } from 'react';

export const ChatMessage: FC<TChatMessage> = ({
	text,
	author,
	timestamp,
	isOwn,
}) => {
	return (
		<div
			className={cn(
				'flex flex-col mb-2',
				isOwn ? 'self-end items-end' : 'self-start items-start'
			)}
		>
			{author && (
				<span className='text-xs text-muted-foreground mb-1'>{author}</span>
			)}

			<div
				className={cn(
					'px-4 py-2 rounded-2xl text-sm text-primary-foreground',
					isOwn ? 'bg-green-800' : 'bg-primary'
				)}
			>
				{text}
			</div>

			{timestamp && (
				<span className='text-[10px] text-muted-foreground mt-1'>
					{timestamp}
				</span>
			)}
		</div>
	);
};
