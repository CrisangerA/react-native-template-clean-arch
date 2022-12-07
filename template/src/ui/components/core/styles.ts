import {StyleSheet} from 'react-native';
import {Theme} from '@config/styles';

export const MainStyles = StyleSheet.create({
  p5: {
    padding: Theme.layout.padding(5),
  },
  ml2: {
    marginLeft: 8,
  },
  // FLEXBOX
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
