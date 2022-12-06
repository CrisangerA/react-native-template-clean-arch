import {View} from 'react-native';
import React, {PropsWithChildren} from 'react';

// ---------------------------------------------------------------------------------------------------
interface Props {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  p?: number;
}
export default function Padding({
  top,
  bottom,
  left,
  right,
  p,
  children,
}: PropsWithChildren<Props>) {
  const style = [];
  if (top) {
    style.push({paddingTop: top});
  }
  if (bottom) {
    style.push({paddingBottom: top});
  }
  if (left) {
    style.push({paddingLeft: top});
  }
  if (right) {
    style.push({paddingRight: top});
  }
  if (p) {
    style.push({padding: p});
  }
  if (children) {
    return <View style={style}>{children}</View>;
  }
  return <View style={style} />;
}
