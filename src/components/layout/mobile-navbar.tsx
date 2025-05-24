'use client';

import { Link, usePathname } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils/cn';
import { MessageCircle, User } from 'lucide-react';
import { useTranslations } from 'next-intl';

const navItems = [
	{ href: '/profile', labelKey: 'profile', icon: <User size={20} /> },
	{ href: '/chat', labelKey: 'chat', icon: <MessageCircle size={20} /> },
];

export const MobileNavbar = () => {
	const pathname = usePathname();
	const t = useTranslations('navigation');

	return (
		<nav className='fixed bottom-0 left-0 right-0 bg-muted border-t p-2 flex justify-around items-center md:hidden'>
			{navItems.map(item => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						'flex flex-col items-center text-xs px-2 py-1 transition',
						pathname === item.href
							? 'text-primary font-medium'
							: 'text-muted-foreground'
					)}
				>
					{item.icon}
					<span>{t(item.labelKey)}</span>
				</Link>
			))}
		</nav>
	);
};
