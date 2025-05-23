import { redirect } from '@/lib/i18n/navigation';

export default function Home({ params }: { params: { locale: string } }) {
	return redirect({ href: '/profile', locale: params.locale });
}
