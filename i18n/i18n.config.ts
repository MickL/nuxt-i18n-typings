export default defineI18nConfig(() => ({
  defaultLanguage: 'de',
  fallbackLocale: 'de',
  numberFormats: {
    de: {
      currency: {
        style: 'currency',
        currency: 'EUR',
      },
    },
  },
  datetimeFormats: {
    de: {
      date: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      },
    },
  },
}));
