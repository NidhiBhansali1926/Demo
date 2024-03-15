import { StyleSheet } from 'react-native';

import { Icon, Margin, Padding, Sizes } from '@theme';

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: Margin.defaultSmall,
    borderRadius: Sizes.cornerRadius.extraLargePlus,
    height: Icon.semiLargeHeight,
  },
  buttonIcon: {
    marginRight: Padding.small,
  },
});

export default styles;
