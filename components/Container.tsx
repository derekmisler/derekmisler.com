import styled from 'styled-components'
import { ContainerProps } from 'types/layout'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { SmMdLgWidths } from 'types/layout'

const { navHeight, widths } = LAYOUT_DEFAULTS
export const Container = styled('div')<ContainerProps>`
  min-height: ${({ fullHeight }) =>
    fullHeight ? `calc(100vh - ${navHeight}px)` : 'auto'};
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: ${({ width = SmMdLgWidths.Medium }) => widths[width]};
  max-width: 100%;
`
