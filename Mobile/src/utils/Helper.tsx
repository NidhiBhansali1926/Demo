import { NavigationProp } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';

import { store } from '../store/index';

import { AuthParamsList } from '@typing/navigation';

export const renderScreen = (screen: ReactElement) => {
  const myScreen = create(<Provider store={store}>{screen}</Provider>);
  return myScreen;
};

export const getPropsWithNavigation = (props?: unknown, navigationPropExtension?: Partial<NavigationProp<AuthParamsList>>) => ({
  ...props,
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
    replace: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn(() => {}),
    isFocused: () => true,
    addListener: jest.fn().mockImplementation((event, callback) => {
      callback();
      return {
        remove: jest.fn(),
      };
    }),
    ...navigationPropExtension,
  },
});
