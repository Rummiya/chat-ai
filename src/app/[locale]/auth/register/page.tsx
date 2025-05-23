import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { RegisterForm } from '@/features/auth/components/register-form';
import { useTranslations } from 'next-intl';

export default function Register() {
	const t = useTranslations('auth.register');

	return (
		<Card className='w-[350px] border-gray-500/50'>
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
