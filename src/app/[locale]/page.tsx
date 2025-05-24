import { redirect } from '@/lib/i18n/navigation';

type Props = {
	params: {
		locale: string;
	};
};

export default function Home({ params }: Props) {
	return redirect({ href: '/profile', locale: params.locale });
}
