import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, ImageBackgroundProps } from 'react-native';
import SafeAreaView, { ForceInsetProp } from 'react-native-safe-area-view';

import { useTheme } from '@hooks';

interface AppBackgroundProps extends ImageBackgroundProps {
  children: React.ReactNode;
  colors?: string[];
  location?: number[];
  overlayColor?: string;
}

const AppBackground = ({ children, colors, location, overlayColor, ...imageBackgroundProps }: AppBackgroundProps) => {
  const { Layout, colorThemeVariable } = useTheme();

  return (
    <ImageBackground style={Layout.fill} {...imageBackgroundProps}>
      <LinearGradient
        colors={colors ?? [colorThemeVariable.transparent, colorThemeVariable.transparent]}
        locations={location ?? [0, 1]}
        style={Layout.fill}
      >
        <SafeAreaView
          style={[Layout.fill, { backgroundColor: overlayColor ?? colorThemeVariable.transparent }]}
          forceInset={Layout.safeareaViewInsent as ForceInsetProp}
        >
          {children}
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default AppBackground;
