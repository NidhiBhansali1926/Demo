import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
const isIphone = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

const APP_FONTS = {
  NUNITO_REGULAR: 'Nunito-Regular',
  NUNITO_MEDIUM: 'Nunito-Medium',
  NUNITO_BOLD: 'Nunito-Bold',
  NUNITO_SEMIBOLD: 'Nunito-SemiBold',
};

export default {
  countPixelRatio: (size: number) => size,
  responsiveHeight: (size: number) => size,
  responsiveWidth: (size: number) => size,
  smartScale: (value: number) => {
    return value;
  },
  smartWidthScale: (value: number) => {
    return value;
  },
  fontRegular: APP_FONTS.NUNITO_REGULAR,
  fontMedium: APP_FONTS.NUNITO_MEDIUM,
  fontBold: APP_FONTS.NUNITO_BOLD,
  fontSemibold: APP_FONTS.NUNITO_SEMIBOLD,
  width,
  height,
  isIphone,
  isAndroid,
};
