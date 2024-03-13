import { StyleSheet } from 'react-native';

import { Icon, Padding, Sizes } from './Dimension';
import StyleConfig from './StyleConfig';
import { FontSize } from './Variables';

import { CommonParams } from '@typing/theme';

export default function <C> ({ Colors, ...args }: CommonParams<C>) {
  return {
    ...StyleSheet.create({
      heading2: {
        fontFamily: StyleConfig.fontSemibold,
        fontSize: FontSize.regular,
        lineHeight: 33,
      },
      backgroundPrimary: {
        backgroundColor: Colors.commonThemeColor.secondary,
      },
      backgroundReset: {
        backgroundColor: Colors.commonThemeColor.white,
      },
      textInput: {
        backgroundColor: Colors.commonThemeColor.inputBackground,
        color: Colors.commonThemeColor.black,
        height: Icon.height,
        borderRadius: Sizes.cornerRadius.extraSmall,
        paddingStart: Padding.default,
      },
      kavContainer: {
        flexGrow: 1,
        paddingVertical: Padding.extraSmall,
      },
      backIcon: {
        tintColor: Colors.commonThemeColor.black,
      },
      iconStyle: {
        height: Icon.smallHeight,
        width: Icon.smallHeight,
      },
    }),
  };
}
