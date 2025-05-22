import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { LoginForm } from './login-form';

export default function Login() {
	const t = useTranslations('auth.login');

	return (
		<Card className='w-[350px]'>
			<CardHeader>
				<CardTitle>{t('title')}</CardTitle>
				<CardDescription>{t('desc')}</CardDescription>
			</CardHeader>
			<CardContent>
				<LoginForm />
			</CardContent>
		</Card>
	);
}
