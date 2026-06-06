export const languages = {
  "pt-br": "PT",
  en: "EN",
  es: "ES",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "pt-br";

export const localeByLang: Record<Lang, string> = {
  "pt-br": "pt-BR",
  en: "en-US",
  es: "es-ES",
};

export const supportedLangs = Object.keys(languages) as Lang[];

export const nonDefaultLangs = supportedLangs.filter((lang) => lang !== defaultLang);

export const isLang = (value: string): value is Lang =>
  supportedLangs.includes(value as Lang);

export const withLangPrefix = (path: string, lang: Lang): string => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (lang === defaultLang) {
    return normalizedPath;
  }

  if (normalizedPath === "/") {
    return `/${lang}/`;
  }

  return `/${lang}${normalizedPath}`;
};
