// Style
const resolveLayoutValues = (input: number) => {
  return input * 4;
};
export const Theme = {
  color: {
    primary: '#f50057',
    secondary: 'yellow',
    text: '#212121',
    input: '#000000',
  },
  text: {
    size: {
      pageTitle: 28,
      title: 24,
      subtitle: 20,
      input: 12,
      button: 16,
      cardTitle: 20,
      cardSubtitle: 18,
    },
    weight: {
      title: 'bold',
      button: 'bold',
    },
  },
  layout: {
    margin: resolveLayoutValues,
    padding: resolveLayoutValues,
    borderRadius: resolveLayoutValues,
  },
  image: {
    avatar: {
      size: 69,
    },
    detail: {
      size: 100,
    },
  },
};
