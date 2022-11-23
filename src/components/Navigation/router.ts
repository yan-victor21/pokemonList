import React from 'react';

export const globalNavRef = React.createRef<any>();

export function routerNavigate(name: string, params?: any) {
  globalNavRef.current?.navigate(name, params || {});
}

export function goBack() {
  if (globalNavRef.current && globalNavRef.current.canGoBack()) {
    globalNavRef.current.goBack();
  }
}
