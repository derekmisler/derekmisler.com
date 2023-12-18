import { HTMLProps } from 'react';
import styled from 'styled-components';
import { LAYOUT_DEFAULTS } from 'styles/layout';
import { TYPOGRAPHY_DEFAULTS, DEFAULT_TEXT_STYLES } from 'styles/typography';

const { buttonFontSize } = TYPOGRAPHY_DEFAULTS;

const { spacing, borderRadius, borderStyle, borderSize, mediaQueries } =
  LAYOUT_DEFAULTS;

export const Link = styled.a<HTMLProps<HTMLLinkElement>>`
  font: unset;
  ${DEFAULT_TEXT_STYLES}
  font-size: ${buttonFontSize.mobile};
  display: inline-block;
  color: var(--link-color);
  background-color: transparent;
  border: ${borderSize} ${borderStyle} var(--link-color);
  text-decoration: none;
  text-transform: uppercase;
  padding: ${spacing.small} ${spacing.medium};
  margin: 0 ${spacing.small} ${spacing.small} 0;
  border-radius: ${borderRadius};
  width: fit-content;
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
    color: var(--background-color);
    background-color: var(--link-hover-color);
    border-color: var(--link-hover-color);
  }

  @media ${mediaQueries.desktop} {
    font-size: ${buttonFontSize.desktop};
  }
`;
