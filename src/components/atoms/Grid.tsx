import styled, { css } from 'styled-components';
import {
  StyledComponentProps,
  LAYOUT_DEFAULTS,
  SmMdLgSizes,
  FlexAlignment,
} from 'styles/layout';
import { generateResponsiveCols } from 'utils/generateResponsiveGrid';
import { generateResponsiveRow } from 'utils/generateResponsiveGrid';

const { mediaQueries, spacing } = LAYOUT_DEFAULTS;

interface RowProps extends StyledComponentProps {
  $columns?: number;
  $columnsDesktop?: number;
  $padding?: SmMdLgSizes;
  $margin?: SmMdLgSizes;
  $gap?: SmMdLgSizes;
  $vAlign?: FlexAlignment;
  $hAlign?: FlexAlignment;
  $fullHeight?: boolean;
}
export const Row = styled.div<RowProps>`
  position: relative;
  display: grid;
  padding: ${({ $padding }) => ($padding ? spacing[$padding] : 0)};
  margin: 0 auto;
  margin-bottom: ${({ $margin }) => ($margin ? spacing[$margin] : 0)};
  grid-column-gap: ${({ $gap }) => ($gap ? spacing[$gap] : 0)};
  align-items: ${({ $vAlign = 'stretch' }) => $vAlign};
  justify-items: ${({ $hAlign = 'stretch' }) => $hAlign};
  ${({ $columns = 1 }) => generateResponsiveRow($columns)}

  @media ${mediaQueries.desktop} {
    min-height: ${({ $fullHeight }) => ($fullHeight ? `100vh` : `auto`)};
    ${({ $columnsDesktop }) => generateResponsiveRow($columnsDesktop)}
  }
`;

interface ColProps extends StyledComponentProps {
  $row?: boolean;
  $range?: number | string;
  $rangeDesktop?: number | string;
  $textAlign?: string;
}
export const Col = styled.div<ColProps>`
  display: block;
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : 'left')};
  ${({ $range = '', $rangeDesktop = '', $row = false }) => {
    if ($row) {
      return css`
        ${generateResponsiveCols('1..')}
      `;
    }
    if (!($range || $rangeDesktop)) return null;
    return css`
      ${generateResponsiveCols($range)}
      @media ${mediaQueries.desktop} {
        ${generateResponsiveCols($rangeDesktop || $range)}
      }
    `;
  }}
`;
