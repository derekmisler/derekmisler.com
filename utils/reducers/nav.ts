export const initialThemeState = { active: false }

export const navReducer = (state: { active: boolean } = initialThemeState) => {
  return {
    active: !state.active
  }
}
