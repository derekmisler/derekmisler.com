import { themes, ThemeStateProps } from 'styles'

export enum ThemeActionTypes {
  Light = 'light',
  Dark = 'dark'
}

export interface ThemeActionProps {
  type: ThemeActionTypes
}

export const themeReducer = (
  state: ThemeStateProps,
  action: ThemeActionProps
) => {
  return {
    theme: themes[action.type] || state.theme,
    isDarkMode: !state.isDarkMode
  }
}
