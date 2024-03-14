import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useContext } from 'react';
import { useColorScheme } from 'react-native';

import { blackTheme, whiteTheme } from '../theme/Colors';

import { ThemeContext } from '@store/context/theme';

import { Common, DefaultVariables, Fonts, Gutters, Layout, themes } from '@theme';
import { Theme, ThemeNavigationColors, ThemeNavigationTheme, ThemeVariables } from '@typing/theme';

const useTheme = () => {
  const { updateTheme, theme, isDarkMode } = useContext(ThemeContext);

  // Get the scheme device
  const colorScheme = useColorScheme();

  // // Get current theme from the store
  const currentTheme = theme;
  const isDark = isDarkMode;

  const darkModeTheme = isDark === null ? colorScheme === 'dark' : isDark;

  // Handle color for dark and light theme.
  const colorThemeVariable = darkModeTheme ? blackTheme : whiteTheme;

  const changeTheme = (themeName: string, darkMode: boolean) => {
    updateTheme(themeName, darkMode);
  };
  let variables = {};
  let partialTheme = {};
  let darkVariables = {};
  let partialDarkTheme = {};

  if (currentTheme !== 'default') {
    const {
      Variables,
      // @ts-ignore to prevent multiple themes handling
      ...themeConfig
    } = themes[currentTheme] || {};

    variables = Variables;
    partialTheme = themeConfig || {};
  }

  if (darkModeTheme) {
    const { Variables, ...darkThemeConfig } = themes[`${currentTheme}_dark` as keyof typeof themes] || {};

    darkVariables = Variables;
    partialDarkTheme = darkThemeConfig;
  }

  const themeVariables = mergeVariables(variables, darkVariables);

  const fonts = Fonts(themeVariables);
  const gutters = Gutters(themeVariables);
  const layout = Layout(themeVariables);
  const common = Common({
    ...themeVariables,
    Layout: Layout(themeVariables),
    Gutters: Gutters(themeVariables),
    Fonts: Fonts(themeVariables),
  });

  // Build the default theme
  const baseTheme: Theme<typeof fonts, typeof gutters, typeof layout, typeof common> = {
    Fonts: fonts,
    Gutters: gutters,
    Layout: layout,
    Common: common,
    ...themeVariables,
  };

  // Merge and return the current Theme
  return buildTheme(
    colorThemeVariable,
    changeTheme,
    darkModeTheme,
    baseTheme,
    formatTheme(themeVariables, partialTheme || {}),
    formatTheme(themeVariables, partialDarkTheme || {}),
  );
};

/**
 * Generate Theme with theme variables
 */
const formatTheme = <F, G, L, C>(variables: ThemeVariables, theme: Partial<Theme<F, G, L, C>>): Partial<Theme<F, G, L, C>> => {
  return Object.entries(theme).reduce((acc, [name, generate]) => {
    return {
      ...acc,
      [name]: (generate as (variables: ThemeVariables) => F | G | L | C)(variables),
    };
  }, theme);
};

/**
 * Merge all variables for building the theme
 * baseTheme <- currentTheme <- currentDarkTheme
 */
const mergeVariables = (themeConfig: Partial<ThemeVariables>, darkThemeConfig: Partial<ThemeVariables>) => {
  return Object.entries(DefaultVariables).reduce((acc, [group, vars]) => {
    const theme: Record<keyof typeof DefaultVariables, typeof vars> | undefined = (themeConfig as Partial<ThemeVariables>)[group];
    const darkTheme: Record<keyof typeof DefaultVariables, typeof vars> | undefined = (darkThemeConfig as Partial<ThemeVariables>)[group];

    return {
      ...acc,
      [group]: {
        ...vars,
        ...(theme || {}),
        ...(darkTheme || {}),
      },
    };
  }, DefaultVariables);
};

/**
 * Provide all the theme exposed with useTheme()
 */
const buildTheme = <T, F, G, L, C>(
  colorThemeVariable: T,
  changeTheme: (theme: string, darkMode: boolean) => void,
  darkMode: boolean,
  baseTheme: Theme<F, G, L, C>,
  themeConfig: Partial<Theme<F, G, L, C>>,
  darkThemeConfig: Partial<Theme<F, G, L, C>>,
) => {
  return {
    colorThemeVariable,
    changeTheme,
    ...mergeTheme(baseTheme, themeConfig, darkThemeConfig),
    darkMode,
    NavigationTheme: mergeNavigationTheme(darkMode ? DarkTheme : DefaultTheme, baseTheme.NavigationColors),
  };
};

/**
 * Merge theme from baseTheme <- currentTheme <- currentDarkTheme
 */
const mergeTheme = <F, G, L, C>(baseTheme: Theme<F, G, L, C>, theme: Partial<Theme<F, G, L, C>>, darkTheme: Partial<Theme<F, G, L, C>>) =>
  Object.entries(baseTheme).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        ...((value as Theme<F, G, L, C>) || {}),
        ...((theme as Partial<Theme<F, G, L, C>>)[key] || {}),
        ...((darkTheme as Partial<Theme<F, G, L, C>>)[key] || {}),
      },
    }),
    baseTheme,
  ) as typeof baseTheme;

/**
 * Merge the React Navigation Theme
 *
 * @param reactNavigationTheme
 * @param overrideColors
 * @return {{colors}}
 */
const mergeNavigationTheme = (reactNavigationTheme: ThemeNavigationTheme, overrideColors: Partial<ThemeNavigationColors>) => ({
  ...reactNavigationTheme,
  colors: {
    ...reactNavigationTheme.colors,
    ...overrideColors,
  },
});

export default useTheme;
