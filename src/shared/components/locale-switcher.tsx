import { routing } from '@/shared/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { LocaleSwitcherSelect } from './locale-switcher-select';

export const LocaleSwitcher = () => {
	const t = useTranslations('localeSwitcher');
	const locale = useLocale();

	return (
		<LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
			{routing.locales.map(cur => (
				<option key={cur} value={cur}>
					{t('locale', { locale: cur })}
				</option>
			))}
		</LocaleSwitcherSelect>
	);
};
