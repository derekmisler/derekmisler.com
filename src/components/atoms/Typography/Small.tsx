import styled from 'styled-components';
import { LAYOUT_DEFAULTS } from 'styles/layout';
import {
  DEFAULT_TEXT_STYLES,
  TextProps,
  TYPOGRAPHY_DEFAULTS,
} from 'styles/typography';

const { smallFontSize } = TYPOGRAPHY_DEFAULTS;
const { mediaQueries } = LAYOUT_DEFAULTS;

interface StyledSmallProps extends TextProps {
  $accent?: boolean;
}

export const Small = styled.small<StyledSmallProps>`
  ${DEFAULT_TEXT_STYLES}
  font-size: ${smallFontSize.mobile};
  color: ${({ $accent }) =>
    $accent ? 'var(--accent-color)' : 'var(--text-color)'};
  @media ${mediaQueries.desktop} {
    font-size: ${smallFontSize.desktop};
  }
`;
