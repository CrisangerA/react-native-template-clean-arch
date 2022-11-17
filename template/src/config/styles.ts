// Style
const resolveLayoutValues = (input: number) => {
  return input * 4;
};
export const Theme = {
  color: {
    primary: '#f50057',
    secondary: 'yellow',
    text: '#212121',
  },
  text: {
    size: {
      pageTitle: 28,
      title: 24,
      subtitle: 20,
      input: 12,
      button: 16,
    },
  },
  layout: {
    margin: resolveLayoutValues,
    padding: resolveLayoutValues,
    borderRadius: resolveLayoutValues,
  },
};
