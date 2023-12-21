import styled from 'styled-components';
import { DEFAULT_TEXT_STYLES, TextProps } from 'styles/typography';
import { LAYOUT_DEFAULTS } from 'styles/layout';

const { spacing, mediaQueries } = LAYOUT_DEFAULTS;

export const Text = styled.p.attrs<TextProps>(({ $inline }) => ({
  as: $inline ? 'span' : 'p',
}))<TextProps>`
  ${DEFAULT_TEXT_STYLES}
  padding-top: ${spacing.medium};
  margin-bottom: ${spacing.small};
  text-align: ${({ $textAlign }) => $textAlign};
  display: ${({ $inline }) => ($inline ? '$inline' : 'block')};
  color: ${({ $accent }) => ($accent ? 'var(--accent-color)' : undefined)};

  @media ${mediaQueries.desktop} {
    margin-bottom: ${spacing.medium};
    text-align: ${({ $textAlignDesktop }) => $textAlignDesktop};
  }
`;
