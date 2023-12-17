import styled from 'styled-components';
import {
  StyledComponentProps,
  SmMdLgSizes,
  LAYOUT_DEFAULTS,
  FlexAlignment,
} from 'styles/layout';
import { DEFAULT_TEXT_STYLES, TYPOGRAPHY_DEFAULTS } from 'styles/typography';

const { baseFontSize, smallLineHeight } = TYPOGRAPHY_DEFAULTS;
const { spacing, mediaQueries } = LAYOUT_DEFAULTS;

interface ListProps extends StyledComponentProps {
  $padding?: SmMdLgSizes;
  $margin?: SmMdLgSizes;
  $alignItems?: FlexAlignment;
  $justifyContent?: FlexAlignment;
  $flexDirection?: 'row' | 'column';
  $bullet?: boolean;
}

export const Ul = styled.ul<ListProps>`
  list-style-type: ${({ $bullet }) => ($bullet ? 'square' : 'none')};
  display: flex;
  flex-direction: ${({ $flexDirection = 'row' }) => $flexDirection};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  position: relative;
  padding: ${({ $padding }) => ($padding ? spacing[$padding] : 0)};
  padding-left: ${({ $bullet }) => ($bullet ? spacing.large : 0)};
  margin: 0;
  margin-bottom: ${({ $margin }) => ($margin ? spacing[$margin] : 0)};
`;

interface ListItemProps extends StyledComponentProps {
  textAlign?: string;
}
export const Li = styled.li<ListItemProps>`
  ${DEFAULT_TEXT_STYLES}
  font-size: ${baseFontSize.mobile};
  line-height: ${smallLineHeight};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  padding: ${spacing.medium} 0 0 0;
  @media ${mediaQueries.desktop} {
    font-size: ${baseFontSize.desktop};
    line-height: ${smallLineHeight};
  }
`;
