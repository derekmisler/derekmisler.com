import { ThemeActionTypes, ThemeActionProps, ThemeStateProps } from 'types'
import { themes } from 'styles'

export const initialThemeState = { theme: themes[ThemeActionTypes.Dark] }

export const themeReducer = (
  state: ThemeStateProps = initialThemeState,
  action: ThemeActionProps
) => ({
  theme: themes[action.type] || state.theme
})
