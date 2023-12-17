import { css } from 'styled-components';
import { LAYOUT_DEFAULTS } from '@/styles/layout';

const { transition, dropShadow } = LAYOUT_DEFAULTS;

export const generateShadow = (
  shadowColor: string,
  backgroundColor: string,
  boxOrText: 'text' | 'box',
) => {
  const boxShadow = boxOrText === 'box';

  const offset = boxShadow
    ? `0 0 0 ${dropShadow.small}`
    : `${dropShadow.small} ${dropShadow.small}`;

  return css`
    ${boxOrText}-shadow: ${offset} ${backgroundColor},
      ${dropShadow.medium} ${dropShadow.medium} ${shadowColor};
    transition: ${transition};
  `;
};
