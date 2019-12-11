import { ThemeActionTypes, ThemeActionProps, ThemeProps } from 'types'
import { themes } from 'styles'

export const initialThemeState = { theme: themes[ThemeActionTypes.Dark] }

export const themeReducer = (
  state: ThemeProps = initialThemeState,
  action: ThemeActionProps
) => ({
  theme: themes[action.type] || state.theme
})
