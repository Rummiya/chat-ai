import { redirect } from '@/lib/i18n/navigation';
import { Locale } from 'next-intl';

type Props = {
	params: Promise<{ locale: Locale }>;
};

export default async function Home({ params }: Props) {
	const { locale } = await params;
	return redirect({ href: '/profile', locale: locale });
}
