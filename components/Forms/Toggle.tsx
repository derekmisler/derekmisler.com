import { HTMLProps, memo, SFC, useState } from 'react'
import styled from 'styled-components'
import { TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'

interface ToggleProps extends HTMLProps<HTMLInputElement> {
  accent?: boolean
}


export const Toggle: SFC<ToggleProps> = memo(({ onClick }) => {
  return (
    <StyledAction
      onClick={onClick}
      active={active}
    >
      <Plus />
    </StyledAction>
  )
})
