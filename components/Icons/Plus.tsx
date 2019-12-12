import React, { FC, memo } from 'react'
import { useTheme } from 'utils/useTheme'

export const Plus: FC<{ fill?: string }> = memo(({ fill }) => {
  const [{ text }] = useTheme()
  return (
    <svg width='24px' height='24px' viewBox='0 0 24 24'>
      <path
        fill={fill || text}
        d='M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z'
      />
    </svg>
  )
})
