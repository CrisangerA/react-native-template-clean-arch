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
    fontWeight: Theme.text.weight.button as any,
  },
  input: {
    fontSize: Theme.text.size.input,
    marginBottom: Theme.layout.margin(1),
    color: Theme.color.input,
  },
  pageTitle: {
    color: Theme.color.primary,
    fontSize: Theme.text.size.pageTitle,
    fontWeight: 'bold',
  },
  title: {
    fontSize: Theme.text.size.title,
    fontWeight: Theme.text.weight.title as any,
  },
  subtitle: {
    fontSize: Theme.text.size.subtitle,
  },
  link: {
    fontStyle: 'italic',
    color: Theme.color.primary,
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

export const MainStyles = StyleSheet.create({
  // LAYOUT
  p5: {
    padding: Theme.layout.padding(5),
  },
  ml2: {
    marginLeft: 8,
  },
  flex: {
    flex: 1,
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowJustifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowAlignCenterJustifyBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRowAlignEndJustifyBetween: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  flexRowAlignStartJustifyBetween: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  // IMAGES
  imageAvatar: {
    width: Theme.image.avatar.size,
    height: Theme.image.avatar.size,
    borderRadius: Theme.layout.borderRadius(4),
  },
  imageDetail: {
    width: Theme.image.detail.size,
    height: Theme.image.detail.size,
  },
});
