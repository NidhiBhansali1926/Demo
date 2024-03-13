import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import styles from './styles';

import { AppBackground, AppButton } from '@src/components';
import { useAppDispatch, useAppSelector } from '@src/hooks';
import { BG_IMAGE } from '@backgrounds';

import { useTheme } from '@hooks';
import { Routes } from '@routes';
import { useLazyGetUserDataQuery } from '@services/auth';
import { loginAction, selectIsLoggedIn } from '@store/auth';
import { LogoSVG } from '@svg';

import { TakeSurveyScreenProps } from '@typing/navigation';
import { dummyData } from '@utils/DummyData';
import Methods from '@utils/Method';
import FirebaseAnalyticCrashlyticMethods from '@services/analytic';

const TakeSurvey = ({ navigation }: TakeSurveyScreenProps) => {
  const { Layout, colorThemeVariable, Fonts, Common } = useTheme();
  const { t } = useTranslation(['takeSurvey']);

  const [getUserData, { isLoading }] = useLazyGetUserDataQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Track a screen with firebase analytic and crashlytic
    FirebaseAnalyticCrashlyticMethods.logCurrentScreen('TakeSurvey Screen', 'TakeSurvey');
  }, []);

  const trackEvent = async () => {
    try {
      // Log a custom event when a button is pressed
      /* eslint-disable camelcase */
      FirebaseAnalyticCrashlyticMethods.logEvent('tract_event_button_click', {
        id: 3745092,
        item: 'Track event',
        description: ['screen 1'],
      });
      console.log('Take Survey Button click event logged successfully');
    } catch (error) {
      console.error('Error Take Survey! button click event:', error);
    }
  };

  // Print login value from redux
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleTakeSurvey = async () => {
    try {
      // update login value using redux
      dispatch(loginAction({ token: dummyData.token }));
      const response = await getUserData().unwrap();
      console.log('response--->', response);
      trackEvent();
      navigation.navigate(Routes.ElevateAdventure);
    } catch (error) {
      console.log('error while getting user data--->', error);
      navigation.navigate(Routes.ElevateAdventure);
    }
  };

  return (
    <AppBackground colors={colorThemeVariable.takeSurveyGradient} overlayColor={colorThemeVariable.takeSurveyOverlay} source={BG_IMAGE.takeSurvey}>
      <View style={[Layout.fill, styles.logoContainer]}>
        <LogoSVG style={{ ...Layout.alignSelfCenter }} />
      </View>
      <View style={styles.container}>
        <Text style={[Fonts.textCenter, Common.heading2, styles.title, { color: colorThemeVariable.white }]}>{t('takeSurvey:title')}</Text>
        <Text style={[Fonts.textCenter, Fonts.textNunitoRegular, Fonts.textSmallPlus, { color: colorThemeVariable.description }]}>
          {t('takeSurvey:descriptionOne')}
        </Text>
        <Text style={[Fonts.textCenter, Fonts.textNunitoRegular, Fonts.textSmallPlus, styles.description, { color: colorThemeVariable.description }]}>
          {t('takeSurvey:descriptionTwo')}
        </Text>
        <AppButton name={t('takeSurvey:primaryBtn')} isLoading={isLoading} handleClick={handleTakeSurvey} />
        <AppButton
          name={t('takeSurvey:secondaryBtn')}
          containerStyle={[
            styles.secondaryBtn,
            {
              backgroundColor: colorThemeVariable.white,
            },
          ]}
          handleClick={Methods.inDevelopmentAlert}
        />
      </View>
    </AppBackground>
  );
};

export default TakeSurvey;
