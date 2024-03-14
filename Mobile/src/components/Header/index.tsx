import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, PressableProps, Text, View } from 'react-native';

import styles from './styles';

import { useTheme } from '@hooks';

import { ArrowSVG } from '@svg';
import Methods from '@utils/Method';

export interface MenuBarProps {
  handleOnPressBackIcon: PressableProps['onPress'];
}

const Header = React.memo(({ handleOnPressBackIcon }: MenuBarProps) => {
  const { Fonts, Layout, Colors } = useTheme();
  const { t } = useTranslation(['elevateAdventure']);

  return (
    <View style={[styles.container, Layout.row, Layout.justifyContentBetween]}>
      <Pressable hitSlop={5} onPress={handleOnPressBackIcon}>
        <ArrowSVG />
      </Pressable>
      <Pressable onPress={Methods.inDevelopmentAlert}>
        <Text style={[Fonts.textSmallPlus, Fonts.textNunitoMedium, { color: Colors.commonThemeColor.black }]}>
          {t('elevateAdventure:saveForLater')}
        </Text>
      </Pressable>
    </View>
  );
});

export default Header;
