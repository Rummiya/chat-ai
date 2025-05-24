'use client';

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

import {
	createRegisterSchema,
	RegisterSchema,
} from '@/features/auth/auth-schema';
import { Link, useRouter } from '@/lib/i18n/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import { useRegister } from '@/features/auth/useAuth';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

export function RegisterForm() {
	const router = useRouter();
	const t = useTranslations('auth');
	const formSchema = createRegisterSchema(t);
	const { mutateAsync, isPending, error } = useRegister();

	const form = useForm<RegisterSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: { email: string; password: string }) => {
		try {
			await mutateAsync(data);
			router.push('/auth/login');
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
						{t('register.hasAccount')}{' '}
						<Link href={'/auth/login'} className='text-blue-800'>
							{t('register.loginLink')}
						</Link>
					</span>
					<Button type='submit' disabled={isPending}>
						{isPending ? 'loading' : t('register.button')}
					</Button>
				</div>
			</form>
		</Form>
	);
}
