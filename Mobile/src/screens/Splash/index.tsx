import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { BG_IMAGE } from '@backgrounds';

import { AppBackground } from '@components';
import { useTheme } from '@hooks';
import { Routes } from '@routes';
import { CustomFonts } from '@src/theme/assets/fonts';
import { LogoSVG } from '@svg';
import { SplashScreenProps } from '@typing/navigation';

const Splash = ({ navigation }: SplashScreenProps) => {
  const { Layout, Gutters, colorThemeVariable } = useTheme();
  const [isFontLoaded] = useFonts(CustomFonts);

  const init = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    navigation.replace(Routes.Auth);
  };

  useEffect(() => {
    if (isFontLoaded) {
      init();
    }
  }, [isFontLoaded]);

  return (
    <AppBackground colors={colorThemeVariable.takeSurveyGradient} overlayColor={colorThemeVariable.takeSurveyOverlay} source={BG_IMAGE.takeSurvey}>
      <View style={[Layout.fill, Layout.center]}>
        <LogoSVG />
        <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} color={colorThemeVariable.background} />
      </View>
    </AppBackground>
  );
};

export default Splash;
