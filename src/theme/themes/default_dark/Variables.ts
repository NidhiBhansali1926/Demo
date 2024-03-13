import Colors from '../../Colors';

import { ThemeNavigationColors } from '@typing/theme';

// Add default color for dark theme.
export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.blackTheme.primary,
  background: Colors.blackTheme.background,
  card: Colors.blackTheme.card,
};

export default {
  Colors,
  NavigationColors,
};
