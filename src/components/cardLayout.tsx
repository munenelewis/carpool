/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {Dimensions} from 'react-native';

// import { ScrollView } from 'react-native-gesture-handler';

interface PropTypes {
  grey?: boolean;
  header?: Element;
  noPad?: boolean;
  safeArea?: boolean;
  containerWidth?: number;
  noScroll?: boolean;
  footer?: Element;
  children?: React.ReactNode;
}

const ContentLayout: React.FC<PropTypes> = ({
  children,
  grey,
  header,
  noPad,
  safeArea,
  containerWidth,
  noScroll,
  footer,
}) => {
  return <View style={{marginTop: 50,}}>{children}</View>;
};

export default ContentLayout;
