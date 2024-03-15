import React from 'react';
import { Provider } from 'react-redux';

import ApplicationNavigator from './src/navigators/Application';
import { persistor, store } from './src/store/index';

import './src/translations';
import GlobalStateProvider from './src/store/GlobalStateProvider';

import { PersistGate } from 'redux-persist/lib/integration/react';
import { StatusBar } from 'expo-status-bar';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStateProvider>
        <StatusBar style='light' />
        <ApplicationNavigator />
      </GlobalStateProvider>
    </PersistGate>
  </Provider>
);

export default App;
