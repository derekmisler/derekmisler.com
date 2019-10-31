import styled from 'styled-components'
import { ContainerProps } from 'types/layout'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { SmMdLgWidths } from 'types/layout'

export const Container = styled('div')<ContainerProps>`
  height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'auto')};
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: ${({ width = SmMdLgWidths.Medium }) => LAYOUT_DEFAULTS.widths[width]};
`
