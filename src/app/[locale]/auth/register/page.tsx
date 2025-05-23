import { RegisterForm } from '@/features/auth/components/register-form';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card';
import { useTranslations } from 'next-intl';

export default function Register() {
	const t = useTranslations('auth.register');

	return (
		<Card className='w-[350px]'>
			<CardHeader>
				<CardTitle>{t('title')}</CardTitle>
				<CardDescription>{t('desc')}</CardDescription>
			</CardHeader>
			<CardContent>
				<RegisterForm />
			</CardContent>
		</Card>
	);
}
