import React, {useState} from 'react';
import {
  StatusBar as RNStatusBar,
  View,
  NativeModules,
  StatusBarStyle,
} from 'react-native';

const {StatusBarManager} = NativeModules;

const StatusBarIOS: React.FC<{color: string; theme: StatusBarStyle}> = ({
  color,
  theme,
}) => {
  const [statusBarHeight, setStatusBarHeight] = useState();
  StatusBarManager.getHeight(({height}) => setStatusBarHeight(height + 10));

  return (
    <View
      style={{
        backgroundColor: color,
        width: '100%',
        height: statusBarHeight,
        zIndex: 1,
        elevation: 2,
      }}>
      <RNStatusBar barStyle={theme} backgroundColor={color} />
    </View>
  );
};

export {StatusBarIOS};
