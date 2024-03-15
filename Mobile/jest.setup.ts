import 'react-native-gesture-handler';

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest.fn().mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('expo-font', () => []);

jest.mock('expo-linear-gradient', () => 'LinearGradient');

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

jest.mock('@react-native-async-storage/async-storage', () => require('@react-native-async-storage/async-storage/jest/async-storage-mock'));

jest.mock('@react-native-firebase/analytics', () => ({
  logEvent: jest.fn(),
  setUserProperties: jest.fn(),
}));

jest.mock('@react-native-firebase/crashlytics', () => ({
  recordError: jest.fn(),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
  use: jest.fn(),
  init: jest.fn(),
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

jest.mock('@backgrounds', () => ({
  BG_IMAGE: { surveyThree: 'surveyThreeImage.jpg' },
}));

jest.mock('@components', () => ({
  AppBackground: 'AppBackground',
  AppButton: 'AppButton',
  Header: 'Header',
}));

jest.mock('@hooks', () => ({
  useTheme: () => ({
    Layout: { scrollFill: 'scrollFillValue', fill: {}, center: {} },
    Fonts: {},
    colorThemeVariable: { takeSurveyGradient: [], takeSurveyOverlay: '', background: 'pink', title: 'yellow', subTitle: 'red' },
    Common: {},
    Gutters: { largeVMargin: {} },
  }),
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock('expo-font', () => ({
  useFonts: jest.fn().mockReturnValue([true]),
}));

jest.mock('@routes', () => ({
  Routes: { EnterTheGlovers: 'EnterTheGloversRoute' },
}));

jest.mock('@svg', () => ({
  SurveyOneSVG: 'SurveyOneSVG',
  SurveyTwoSVG: 'SurveyTwoSVG',
  SurveyThreeSVG: 'SurveyThreeSVG',
  SurveyFourSVG: 'SurveyFourSVG',
  LogoSVG: 'LogoSVG',
  ArrowSVG: 'ArrowSVG',
}));

jest.mock('@services/analytic', () => ({
  logCurrentScreen: jest.fn(),
  logEvent: jest.fn(),
}));

jest.mock('expo-font', () => ({
  useFonts: jest.fn().mockReturnValue([true]),
}));

jest.mock('expo-status-bar', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(),
}));
