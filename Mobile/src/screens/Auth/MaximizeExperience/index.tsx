import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

import { BG_IMAGE } from '@backgrounds';

import { AppBackground, AppButton, Header } from '@components';
import { useTheme } from '@hooks';
import { Routes } from '@routes';
import { SurveyTwoSVG } from '@svg';

import { MaximizeExperienceScreenProps } from '@typing/navigation';

const MaximizeExperience = ({ navigation }: MaximizeExperienceScreenProps) => {
  const { Layout, Fonts, colorThemeVariable, Common } = useTheme();
  const { t } = useTranslation(['maximizeExperience']);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const navigateToNextScreen = () => {
    navigation.navigate(Routes.BoostJourney);
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
        <SurveyTwoSVG style={{ ...Layout.alignSelfCenter, ...styles.icon }} />
        <Text style={[Fonts.textCenter, Common.heading2, { color: colorThemeVariable.title }]}>{t('maximizeExperience:title')}</Text>
        <Text style={[Fonts.textCenter, Fonts.textNunitoRegular, Fonts.textSmallPlus, styles.description, { color: colorThemeVariable.subTitle }]}>
          {t('maximizeExperience:description')}
        </Text>
        <AppButton name={t('maximizeExperience:primaryBtn')} handleClick={navigateToNextScreen} />
      </ScrollView>
    </AppBackground>
  );
};

export default MaximizeExperience;
