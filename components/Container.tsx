import styled from 'styled-components'
import { ContainerProps } from 'types/layout'
import { LAYOUT_DEFAULTS } from 'styles/layout'

export const Container = styled('div')<ContainerProps>`
  height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'auto')};
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  position: relative;
  max-width: ${({ level }) => LAYOUT_DEFAULTS.widths[level - 1]};
`
