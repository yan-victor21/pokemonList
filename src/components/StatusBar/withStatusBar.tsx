import React from 'react';
import {StatusBarStyle} from 'react-native';
import {StatusBar} from './statusBar';

const WithStatusBar = (color: string, theme: StatusBarStyle) => {
  const withStatusBarComponent =
    (Component: React.ReactNode) =>
    (
      // eslint-disable-next-line no-undef
      props: any,
    ) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks

      return (
        <>
          <StatusBar color={color} theme={theme} />
          <Component {...props} />
        </>
      );
    };

  return withStatusBarComponent;
};

export {WithStatusBar};
