import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

import { BG_IMAGE } from '@backgrounds';

import { AppBackground, AppButton, Header } from '@components';
import { useTheme } from '@hooks';
import { Routes } from '@routes';
import { SurveyOneSVG } from '@svg';

import { ElevateAdventureScreenProps } from '@typing/navigation';

const ElevateAdventure = ({ navigation }: ElevateAdventureScreenProps) => {
  const { Layout, Fonts, colorThemeVariable, Common } = useTheme();
  const { t } = useTranslation(['elevateAdventure']);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const navigateToNextScreen = () => {
    navigation.navigate(Routes.MaximizeExperience);
  };

  return (
    <AppBackground source={BG_IMAGE.surveyOne}>
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
        <SurveyOneSVG style={{ ...Layout.alignSelfCenter, ...styles.icon }} />
        <Text style={[Fonts.textCenter, Common.heading2, { color: colorThemeVariable.title }]}>{t('elevateAdventure:title')}</Text>
        <Text style={[Fonts.textCenter, Fonts.textNunitoRegular, Fonts.textSmallPlus, styles.description, { color: colorThemeVariable.subTitle }]}>
          {t('elevateAdventure:description')}
        </Text>
        <AppButton name={t('elevateAdventure:primaryBtn')} handleClick={navigateToNextScreen} />
      </ScrollView>
    </AppBackground>
  );
};

export default ElevateAdventure;
