import React from 'react';
import {Platform, StatusBarStyle} from 'react-native';

import {StatusBarIOS} from './statusBarIOS';
import {StatusBarAndroid} from './statusBarAndroid';

const StatusBar: React.FC<{
  color: string;
  theme: StatusBarStyle;
}> = ({color, theme}) => {
  return Platform.OS === 'ios' ? (
    <StatusBarIOS color={color} theme={theme} />
  ) : (
    <StatusBarAndroid color={color} theme={theme} />
  );
};

export {StatusBar};
