import { StyleSheet } from 'react-native';

import { Margin, Padding, Sizes } from '@theme';

const styles = StyleSheet.create({
  container: {
    borderTopStartRadius: Sizes.cornerRadius.extraLargePlus,
    borderTopEndRadius: Sizes.cornerRadius.extraLargePlus,
    paddingHorizontal: Padding.defaultIntermediate,
  },
  scrollView: {
    marginTop: Margin.largeExtra,
  },
  description: {
    marginTop: Margin.extraSmall,
  },
  icon: {
    marginTop: Margin.smallHuge,
    marginBottom: Margin.large,
  },
});

export default styles;
