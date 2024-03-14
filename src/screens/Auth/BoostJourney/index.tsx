import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

import { BG_IMAGE } from '@backgrounds';

import { AppBackground, AppButton, Header } from '@components';
import { useTheme } from '@hooks';
import { Routes } from '@routes';
import { SurveyThreeSVG } from '@svg';

import { BoostJourneyScreenProps } from '@typing/navigation';

const BoostJourney = ({ navigation }: BoostJourneyScreenProps) => {
  const { Layout, Fonts, colorThemeVariable, Common } = useTheme();
  const { t } = useTranslation(['boostJourney']);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const navigateToNextScreen = () => {
    navigation.navigate(Routes.EnterTheGlovers);
  };

  return (
    <AppBackground source={BG_IMAGE.surveyThree}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode='never'
        style={styles.scrollView}
        contentContainerStyle={[
          Layout.scrollFill,
          styles.container,
          {
            backgroundColor: colorThemeVariable.background,
          },
        ]}
      >
        <Header handleOnPressBackIcon={handleGoBack} />
        <SurveyThreeSVG style={{ ...Layout.alignSelfCenter, ...styles.icon }} />
        <Text style={[Fonts.textCenter, Common.heading2, { color: colorThemeVariable.title }]}>{t('boostJourney:title')}</Text>
        <Text style={[Fonts.textCenter, Fonts.textNunitoRegular, Fonts.textSmallPlus, styles.description, { color: colorThemeVariable.subTitle }]}>
          {t('boostJourney:description')}
        </Text>
        <AppButton name={t('boostJourney:primaryBtn')} handleClick={navigateToNextScreen} />
      </ScrollView>
    </AppBackground>
  );
};

export default BoostJourney;
