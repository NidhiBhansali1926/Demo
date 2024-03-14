import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

import { BG_IMAGE } from '@backgrounds';

import { AppBackground, AppButton } from '@components';
import { useTheme } from '@hooks';
import { Routes } from '@routes';
import { SurveyFourSVG } from '@svg';

import { EnterTheGloversScreenProps } from '@typing/navigation';

const EnterTheGlovers = ({ navigation }: EnterTheGloversScreenProps) => {
  const { Layout, Fonts, colorThemeVariable, Common } = useTheme();
  const { t } = useTranslation(['enterTheGlovers']);

  const navigateToNextScreen = () => {
    navigation.reset({ index: 0, routes: [{ name: Routes.TakeSurvey }] });
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
        <SurveyFourSVG style={{ ...Layout.alignSelfCenter, ...styles.icon }} />
        <Text style={[Fonts.textCenter, Common.heading2, { color: colorThemeVariable.title }]}>{t('enterTheGlovers:title')}</Text>
        <Text style={[Fonts.textCenter, Fonts.textNunitoRegular, Fonts.textSmallPlus, styles.description, { color: colorThemeVariable.subTitle }]}>
          {t('enterTheGlovers:description')}
        </Text>
        <AppButton name={t('enterTheGlovers:primaryBtn')} handleClick={navigateToNextScreen} />
      </ScrollView>
    </AppBackground>
  );
};

export default EnterTheGlovers;
