import translations from "./translations.json";

type Locale = keyof typeof translations;
type TranslationKey = keyof (typeof translations)[Locale];

export function useTranslations(currentLocale: string | undefined) {
  return function t(key: TranslationKey) {
    return currentLocale && currentLocale in translations
      ? translations[currentLocale as Locale][key]
      : "";
  };
}

export function tw(
  strings: TemplateStringsArray,
  ...values: unknown[]
): string {
  return String.raw({ raw: strings }, ...values);
}
