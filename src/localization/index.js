import React from 'react';
import localizedStrings from './strings';

console.log({ React });
const {
  Provider: LocalizationProvider,
  Consumer: LocalizationConsumer
} = React.createContext({
  locale: 'en',
  fallbackLocale: 'en',
  setLocale: () => null
});

function localized({ id, locale = 'en', fallbackLocale = 'en', params = {} }) {
  const translation = (localizedStrings[locale] ||
    localizedStrings[fallbackLocale])[id];

  if (!translation) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error(
        `No localized string found for id '${id}', locale ${locale}.`
      );
    }

    return id;
  }

  if (typeof translation === 'function') return translation(params);

  return translation;
}

export { LocalizationProvider, LocalizationConsumer, localized };
