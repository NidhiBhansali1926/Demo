import { StyleSheet } from 'react-native';

import { Margin, Padding } from '@src/theme';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Margin.default,
    paddingBottom: Padding.large,
  },
  logoContainer: {
    marginTop: Margin.defaultHuge,
  },
  secondaryBtn: {
    marginVertical: Margin.none,
  },
  title: {
    marginBottom: Margin.small,
  },
  description: {
    marginTop: Margin.defaultTinyPlus,
    marginBottom: Margin.extraSmall,
  },
});

export default styles;
