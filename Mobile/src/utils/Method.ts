import { CommonActions } from '@react-navigation/native';

import { Alert } from 'react-native';

import { reduxStorage } from '@store/index';

const Methods = {
  startWithReset: (navigation: { dispatch: (arg0: CommonActions.Action) => void }, screenName: string) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: screenName }],
      }),
    );
  },
  savePref: async (key: string, value: string) => {
    await reduxStorage.setItem(key, value);
  },
  removePref: async (key: string) => {
    await reduxStorage.removeItem(key);
  },
  getPref: async (key: string) => {
    return reduxStorage.getItem(key);
  },
  inDevelopmentAlert: () => {
    Alert.alert('In Development');
  },
};

export default Methods;
