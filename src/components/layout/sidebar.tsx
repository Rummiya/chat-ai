'use client';

import { Link, usePathname } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils/cn';
import { MessageCircle, User } from 'lucide-react';
import { useTranslations } from 'next-intl';

const navItems = [
	{ href: '/profile', labelKey: 'profile', icon: <User size={20} /> },
	{ href: '/chat', labelKey: 'chat', icon: <MessageCircle size={20} /> },
];

export const Sidebar = () => {
	const pathname = usePathname();
	const t = useTranslations('navigation');

	return (
		<aside className='w-52 h-full bg-muted p-4 border-r rounded-lg max-md:hidden'>
			<nav className='flex flex-col gap-2'>
				{navItems.map(item => (
					<Link
						key={item.href}
						href={item.href}
						className={cn(
							'rounded px-3 py-2 hover:bg-muted-foreground/10 transition flex items-center gap-2',
							pathname === item.href && 'bg-muted-foreground/10 font-medium'
						)}
					>
						{item.icon}
						{t(item.labelKey)}
					</Link>
				))}
			</nav>
		</aside>
	);
};
