import { Theme as ReactNavigationTheme } from '@react-navigation/native/src/types';

import { DefaultVariables, Fonts, Gutters, Layout, themes, Variables } from '@theme';

export type ThemeVariables = {
  Colors: typeof Variables.Colors;
  NavigationColors: typeof Variables.NavigationColors;
  FontSize: typeof Variables.FontSize;
  MetricsSizes: typeof Variables.MetricsSizes;
};

export type Theme<F, G, L, C> = ThemeVariables & {
  Fonts: F;
  Gutters: G;
  Layout: L;
  Common: C;
  Variables?: Partial<ThemeVariables>;
};

type NavigationColors<T> = T extends { colors: infer U } ? U : never;
type ThemeNavigationColors = NavigationColors<ReactNavigationTheme>;

export type ThemeNavigationTheme = {
  dark: boolean;
  colors: ThemeNavigationColors;
};

const fonts = Fonts(DefaultVariables);
const gutters = Gutters(DefaultVariables);
const layout = Layout(DefaultVariables);

export type CommonParams<C> = ThemeVariables & Pick<Theme<typeof fonts, typeof gutters, typeof layout, C>, 'Layout' | 'Gutters' | 'Fonts'>;

type Margins = 'Margin' | 'BMargin' | 'TMargin' | 'RMargin' | 'LMargin' | 'VMargin' | 'HMargin';
type Paddings = 'Padding' | 'BPadding' | 'TPadding' | 'RPadding' | 'LPadding' | 'VPadding' | 'HPadding';

type MarginKeys = `${keyof ThemeVariables['MetricsSizes']}${Margins}`;
type PaddingKeys = `${keyof ThemeVariables['MetricsSizes']}${Paddings}`;

type Gutters = {
  [key in MarginKeys | PaddingKeys]: {
    [k in string]: number;
  };
};

type DarkProps<T> = {
  [K in keyof T]: K extends `${infer Prefix}_dark` ? K : never;
}[keyof T];

type PropsWithoutDark<T> = Omit<T, DarkProps<T>>;

export type ThemeState = {
  theme: 'default' | keyof PropsWithoutDark<typeof themes>;
  darkMode: boolean | null;
};
