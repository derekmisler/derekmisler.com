import React, { FC, memo, useReducer } from 'react'
import { themeReducer, initialThemeState } from 'utils/reducers'

export const Plus: FC<{ fill?: string }> = memo(({ fill }) => {
  const [state] = useReducer(themeReducer, initialThemeState)
  const { text } = state.theme
  return (
    <svg width='24px' height='24px' viewBox='0 0 24 24'>
      <path
        fill={fill || text}
        d='M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z'
      />
    </svg>
  )
})
