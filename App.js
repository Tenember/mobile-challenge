import React from 'react';
import { observer } from 'mobx-react-lite';
import { StatusBar } from 'expo-status-bar';

import { StoreProvider } from './app/stores';
import Root from './app/containers/root';

const App = () => {
  return (
    <StoreProvider>
      <StatusBar style='auto' />
      <Root />
    </StoreProvider>
  );
}

export default observer(App);
