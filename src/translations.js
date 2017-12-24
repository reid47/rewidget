export const translations = {
  closeButtonLabel: {
    'en-US': 'Close'
  }
};

export const t = (key, locale) => {
  if (!translations[key]) return key;
  if (locale && translations[key][locale]) return translations[key][locale];
  return translations[key]['en-US'];
}
