import { css } from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles/layout'

const { transition, backgroundColor, dropShadow } = LAYOUT_DEFAULTS

export const generateShadow = (
  first: string,
  second: string,
  boxOrText: 'text' | 'box'
) => {
  const boxShadow = boxOrText === 'box'

  const offset = boxShadow
    ? `0 0 0 ${dropShadow.small}`
    : `${dropShadow.small} ${dropShadow.small}`

  const offsetHover = boxShadow
    ? `0 0 0 ${dropShadow.medium}`
    : `${dropShadow.medium} ${dropShadow.medium}`

  return css`
    ${boxOrText}-shadow: ${offset} ${backgroundColor},
      ${dropShadow.medium} ${dropShadow.medium} ${first};
    transition: ${transition};

    &:hover {
      ${boxOrText}-shadow: ${offsetHover} ${backgroundColor},
        ${dropShadow.large} ${dropShadow.large} ${second};
    }
  `
}
