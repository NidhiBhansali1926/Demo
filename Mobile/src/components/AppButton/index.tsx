import React from 'react';
import { ActivityIndicator, ImageSourcePropType, ImageStyle, Pressable, StyleProp, Text, TextStyle, ViewStyle } from 'react-native';

import styles from './styles';

import { useTheme } from '@hooks';

interface ButtonProps {
  name?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType;
  iconStyle?: ImageStyle;
  handleClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const AppButton = ({ name, containerStyle, textStyle, handleClick, isLoading = false, disabled }: ButtonProps) => {
  const { Fonts, Layout, colorThemeVariable } = useTheme();

  return (
    <Pressable
      disabled={disabled || isLoading}
      style={[
        styles.buttonContainer,
        Layout.center,
        { backgroundColor: colorThemeVariable.primary },
        isLoading || disabled ? { backgroundColor: colorThemeVariable.disabledPrimary } : {},
        containerStyle,
      ]}
      onPress={handleClick}
    >
      {isLoading && <ActivityIndicator size='small' style={Layout.absoluteFillObject} color={colorThemeVariable.background} />}
      <Text
        style={[
          Fonts.textNunitoMedium,
          Fonts.textCenter,
          Fonts.textSmallPlus,
          Fonts.textLineHeightDefault,
          { color: colorThemeVariable.title },
          textStyle,
        ]}
      >
        {isLoading ? '' : name}
      </Text>
    </Pressable>
  );
};

export default AppButton;
