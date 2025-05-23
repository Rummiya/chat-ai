import { redirect } from '@/lib/i18n/navigation';

export default function RootPage({ params }: { params: { locale: string } }) {
	return redirect({ href: '/profile', locale: params.locale });
}
