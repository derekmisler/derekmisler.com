import { ThemeActionProps, ThemeStateProps } from 'types'
import { themes } from 'styles'

export const themeReducer = (
  state: ThemeStateProps,
  action: ThemeActionProps
) => {
  return {
    theme: themes[action.type] || state.theme,
    isDarkMode: !state.isDarkMode
  }
}
