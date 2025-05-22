import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { RegisterForm } from './register-form';

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
