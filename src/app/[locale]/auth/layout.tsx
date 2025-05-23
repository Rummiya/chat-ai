import { LocaleSwitcher } from '@/components/shared/locale-switcher';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div className='min-h-screen w-full flex flex-col items-center justify-between bg-muted p-6'>
			<div></div>

			{children}

			<footer className='flex justify-between items-center max-w-md w-full '>
				<span className='text-xs text-center text-muted-foreground'>
					&copy; {new Date().getFullYear()} chat-ai
				</span>
				<LocaleSwitcher />
			</footer>
		</div>
	);
}
