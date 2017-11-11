export const fakeKeyDown = (key, modifier = null) => ({
  key,
  preventDefault: () => {},
  getModifierState: (mod) => mod === modifier
});
