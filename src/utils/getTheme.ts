import { themes, type ThemeStateProps } from '@/styles/colors';

export const getTheme = (): ThemeStateProps => {
  const now = new Date();
  const hour = now.getHours();
  const isDarkMode = hour < 9 || hour >= 17;

  return { theme: themes[isDarkMode ? 'dark' : 'light'], isDarkMode };
};
