'use client';

import { Link, usePathname } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils/cn';
import { useTranslations } from 'next-intl';

const navItems = [
	{ href: '/profile', labelKey: 'profile' },
	{ href: '/chat', labelKey: 'chat' },
];

export const Sidebar = () => {
	const pathname = usePathname();
	const t = useTranslations('navigation');

	return (
		<aside className='w-52 h-full bg-muted p-4 border-r rounded-lg'>
			<nav className='flex flex-col gap-2'>
				{navItems.map(item => (
					<Link
						key={item.href}
						href={item.href}
						className={cn(
							'rounded px-3 py-2 hover:bg-muted-foreground/10 transition',
							pathname === item.href && 'bg-muted-foreground/10 font-medium'
						)}
					>
						{t(item.labelKey)}
					</Link>
				))}
			</nav>
		</aside>
	);
};
