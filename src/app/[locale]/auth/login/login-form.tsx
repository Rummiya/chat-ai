'use client';

import { Link } from '@/i18n/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { createLoginSchema, LoginSchema } from '@/schemas/auth';
import { useTranslations } from 'next-intl';

export const LoginForm = () => {
	const t = useTranslations('auth');
	const formSchema = createLoginSchema(t);

	const form = useForm<LoginSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = () => {};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex items-center flex-col gap-[32px]'
			>
				<FormField
					control={form.control}
					name={'email'}
					render={({ field }) => (
						<FormItem className='w-full'>
							<FormLabel>{t('email')}</FormLabel>
							<FormControl>
								<Input placeholder={t('email')} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem className='w-full'>
							<FormLabel>{t('password')}</FormLabel>
							<FormControl>
								<Input placeholder={t('password')} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className='flex flex-col gap-2 items-center'>
					<span className='text-xs'>
						{t('login.noAccount')}{' '}
						<Link href={'/auth/register'} className='text-blue-800'>
							{t('login.registerLink')}
						</Link>
					</span>
					<Button type='submit'>{t('login.button')}</Button>
				</div>
			</form>
		</Form>
	);
};
