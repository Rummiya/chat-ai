'use client';

import { useAuthStore } from '@/lib/store/authStore';
import { BotIcon, LogOut } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { LocaleSwitcher } from '../shared/locale-switcher';
import { Button } from '../ui/button';

export const Header = () => {
	const t = useTranslations('common');
	const { logout } = useAuthStore();
	const router = useRouter();

	const handleLogout = () => {
		logout();
		router.push('/auth/login');
	};

	return (
		<header className='w-full flex items-center justify-between p-4 border-b bg-background'>
			<div className='text-xl font-bold text-primary flex items-center gap-2'>
				<BotIcon /> chat-ai
			</div>
			<div className='flex items-center gap-4 text-sm'>
				<LocaleSwitcher />
				<Button className='max-md:text-xs' onClick={handleLogout}>
					<LogOut /> {t('logout')}
				</Button>
			</div>
		</header>
	);
};
