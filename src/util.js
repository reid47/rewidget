export const cls = (...classNames) =>
  classNames.filter(name => name).join(' ');

export const clsNs = (...classNames) =>
  'rmcl ' + cls(...classNames);

export const uniqueId = (prefix = '') =>
  prefix + '_' + Math.random().toString(36).slice(2, 10);

export const keyEventMatches = (event, keyName) => {
  const keyNameParts = keyName.split('+');
  if (keyNameParts.length === 1) {
    return event.key === keyNameParts[0];
  }
  return event.key === keyNameParts[1] && event.getModifierState(keyNameParts[0]);
}
