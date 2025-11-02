import { MD3LightTheme } from 'react-native-paper';
import type { MD3Theme } from 'react-native-paper';

// Color palette from Figma
export const colors = {
  neutrals: {
    white: '#FFFFFF',
    g10: '#18171C',
    g20: '#302E38',
    g40: '#5F5C70',
    g50: '#77738C',
    g70: '#ADABBA',
    g90: '#E4E3E8',
    g95: '#F1F1F4',
  },
  prime: {
    main: '#0066CC',
    light: '#3399FF',
    lighter: '#E5F2FF',
  },
  semantic: {
    error: '#FF1A40',
    success: '#00CC44',
    warning: '#FF9419',
  },
};

// Typography styles from Figma
// Font family: General Sans
export const typography = {
  // Headers
  h1Semibold: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '600' as const,
  },
  h1Medium: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '500' as const,
  },
  h1Regular: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '400' as const,
  },
  h2Semibold: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '600' as const,
  },
  h2Medium: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '500' as const,
  },
  h2Regular: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '400' as const,
  },
  h3Semibold: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600' as const,
  },
  h3Medium: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '500' as const,
  },
  h3Regular: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '400' as const,
  },
  h4Semibold: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600' as const,
  },
  h4Medium: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500' as const,
  },
  h4Regular: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '400' as const,
  },
  // Body
  b1Semibold: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600' as const,
  },
  b1Medium: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500' as const,
  },
  b1Regular: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400' as const,
  },
  b2Semibold: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600' as const,
  },
  b2Medium: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500' as const,
  },
  b2Regular: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400' as const,
  },
  b3Semibold: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '600' as const,
  },
  b3Medium: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500' as const,
  },
  b3Regular: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400' as const,
  },
};

// Theme configuration
export const theme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.prime.main,
    background: colors.neutrals.white,
    surface: colors.neutrals.white,
    error: colors.semantic.error,
    onPrimary: colors.neutrals.white,
    onBackground: colors.neutrals.g10,
    onSurface: colors.neutrals.g10,
  },
};

export default theme;
