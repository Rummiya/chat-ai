'use client';

import { Spinner } from '@/components/shared/spinner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { useProfile } from '@/features/profile/useProfile';
import { useTranslations } from 'next-intl';

export const UserProfile = () => {
	const { data: user, isPending, isError } = useProfile();
	const t = useTranslations('profile');

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
		<Card className='w-full mx-auto h-full'>
			<CardHeader>
				<CardTitle className='text-xl'>{t('title')}</CardTitle>
			</CardHeader>
			<CardContent className='space-y-2'>
				<div>
					<strong>{t('email')}:</strong> {user.email}
				</div>
				<div>
					<strong>{t('id')}:</strong> {user.id}
				</div>
			</CardContent>
		</Card>
	);
};
