'use client';

import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

import { themes } from 'styles/colors';

interface ThemeProps {
  variant: 'light' | 'dark';
  children: ReactNode;
}
export const Theme = ({ children, variant }: ThemeProps) => {
  return <ThemeProvider theme={themes[variant]}>{children}</ThemeProvider>;
};
