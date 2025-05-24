'use client';

import { Spinner } from '@/components/shared/spinner';
import { Separator } from '@/components/ui/separator';

import { useProfile } from '@/features/profile/useProfile';
import { useUserStore } from '@/lib/store/userStore';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export const UserProfile = () => {
	const { data: user, isPending, isError, error } = useProfile();
	const { setCurrent } = useUserStore();
	const t = useTranslations('profile');

	useEffect(() => {
		if (!user) return;
		setCurrent(user);
	}, [user, setCurrent]);

	if (isPending) {
		return (
			<div className='w-full h-full flex items-center justify-center'>
				<Spinner />
			</div>
		);
	}

	if (isError || !user) {
		return <p className='text-red-500'>{t('error')}</p>;
	}

	return (
		<>
			<div className='space-y-1'>
				<h2 className='text-xl font-semibold mb-3.5'>{t('title')}</h2>
			</div>
			<Separator className='my-4' />
			<div className='flex h-5 items-center space-x-4'>
				<p>
					<strong>{t('email')}:</strong> {user.email}
				</p>
				<Separator orientation='vertical' />
				<p>
					<strong>{t('id')}:</strong> {user.id}
				</p>
			</div>
			<span className='text-red-500'>{error}</span>
		</>
	);
};
