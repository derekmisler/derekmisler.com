import React, { SFC, memo } from 'react'

export const Plus: SFC<{ fill?: string }> = memo(({ fill }) => (
  <svg width='24px' height='24px' viewBox='0 0 24 24'>
    <path fill={fill} d='M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z' />
  </svg>
))
