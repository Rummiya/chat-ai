import { Geist, Geist_Mono } from 'next/font/google';

import { routing } from '@/lib/i18n/routing';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import { AuthInitializer } from '@/features/auth';
import { QueryProvider } from '@/providers/query-provider';

import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

type Props = {
	children: ReactNode;
	params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
	const { locale } = await params;

	return {
		title: locale === 'ru' ? 'Чат AI' : 'Chat AI',
	};
}
export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		<html lang={locale}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<main className='bg-accent-foreground min-h-screen'>
					<QueryProvider>
						<AuthInitializer />
						<NextIntlClientProvider>{children}</NextIntlClientProvider>
					</QueryProvider>
				</main>
			</body>
		</html>
	);
}
