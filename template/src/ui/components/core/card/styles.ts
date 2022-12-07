import {StyleSheet} from 'react-native';
import {Theme} from '@config/styles';

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
