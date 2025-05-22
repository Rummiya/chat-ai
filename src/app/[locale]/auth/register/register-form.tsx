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

import { createRegisterSchema, RegisterSchema } from '@/schemas/auth';
import { useTranslations } from 'next-intl';

export function RegisterForm() {
	const t = useTranslations('auth');
	const formSchema = createRegisterSchema(t);

	const form = useForm<RegisterSchema>({
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
						{t('register.hasAccount')}{' '}
						<Link href={'/auth/login'} className='text-blue-800'>
							{t('register.loginLink')}
						</Link>
					</span>
					<Button type='submit'>{t('register.button')}</Button>
				</div>
			</form>
		</Form>
	);
}
