import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

const logCurrentScreen = async (screenName: string, className: string) => {
  /* eslint-disable camelcase */
  await analytics().logScreenView({
    screen_class: className,
    screen_name: screenName,
  });
  await crashlytics().setAttribute('screen', screenName);
};

const logEvent = async (eventName: string, data: object) => {
  await analytics().logEvent(eventName, data);
};

const FirebaseAnalyticCrashlyticMethods = {
  logCurrentScreen,
  logEvent,
};

export default FirebaseAnalyticCrashlyticMethods;
