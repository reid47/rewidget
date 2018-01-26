import { t } from './translations';

describe('t', () => {
  describe('when not given a locale', () => {
    it('returns the translation for en-US', () => {
      expect(t('closeButtonLabel')).toBe('Close');
    });
  });

  describe('when given a locale that has a translation', () => {
    it('returns the translation for that locale', () => {
      expect(t('closeButtonLabel', 'en-US')).toBe('Close');
    });
  });

  describe('when given a locale that does not have a translation', () => {
    it('returns the translation for en-US', () => {
      expect(t('closeButtonLabel', 'some-nonexistent-locale')).toBe('Close');
    });
  });

  describe('when given a key that does not have a translation', () => {
    it('returns the key as-is', () => {
      expect(t('some-nonexistent-key')).toBe('some-nonexistent-key');
    });
  });
});
