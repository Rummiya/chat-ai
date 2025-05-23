'use client';

import { Link } from '@/shared/i18n/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

import { createLoginSchema, LoginSchema } from '@/features/auth/auth-schema';
import { useLogin } from '@/features/auth/useAuth';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export const LoginForm = () => {
	const { mutateAsync, isPending, error } = useLogin();
	const router = useRouter();

	const t = useTranslations('auth');
	const formSchema = createLoginSchema(t);

	const form = useForm<LoginSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: { email: string; password: string }) => {
		try {
			const res = await mutateAsync(data);
			console.log(res);
			router.push('/profile');
		} catch (error) {
			console.log(error);
		}
	};

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

				{error && <span className='text-red-500 text-sm'>{error.message}</span>}

				<div className='flex flex-col gap-2 items-center'>
					<span className='text-xs'>
						{t('login.noAccount')}{' '}
						<Link href={'/auth/register'} className='text-blue-800'>
							{t('login.registerLink')}
						</Link>
					</span>
					<Button type='submit' disabled={isPending}>
						{t('login.button')}
					</Button>
				</div>
			</form>
		</Form>
	);
};
