import {StyleSheet} from 'react-native';
import {Theme} from '@config/styles';

export const textStyles = StyleSheet.create({
  text: {
    color: Theme.color.text,
  },
  button: {
    color: Theme.color.primary,
    fontSize: Theme.text.size.button,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    fontSize: Theme.text.size.input,
    marginBottom: Theme.layout.margin(1),
    color: '#212121',
  },
  pageTitle: {
    color: '#212121',
    fontSize: Theme.text.size.pageTitle,
    fontWeight: 'bold',
  },
  title: {
    fontSize: Theme.text.size.title,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: Theme.text.size.subtitle,
  },
});

export const buttonStyles = StyleSheet.create({
  root: {
    padding: Theme.layout.padding(3),
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: Theme.layout.borderRadius(3),
    elevation: 10,
  },
  transparent: {
    elevation: 0,
  },
  outlined: {},
});

export const cardStyles = StyleSheet.create({
  root: {
    borderRadius: Theme.layout.borderRadius(3),
    padding: Theme.layout.borderRadius(5),
    backgroundColor: '#fff',
    elevation: 6,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: Theme.text.size.title,
    color: Theme.color.text,
    fontWeight: 'bold',
  },
});
