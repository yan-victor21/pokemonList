import React from 'react';
import {StatusBar as RNStatusBar, StatusBarStyle} from 'react-native';

const StatusBarAndroid: React.FC<{color: string; theme: StatusBarStyle}> = ({
  color,
  theme,
}) => <RNStatusBar barStyle={theme} backgroundColor={color} />;

export {StatusBarAndroid};
