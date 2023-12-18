import styled from 'styled-components';
import { LAYOUT_DEFAULTS } from 'styles/layout';

const { borderSize, borderSizeLarge, spacing } = LAYOUT_DEFAULTS;

export const Hr = styled.hr<{ $accent?: boolean; $large?: boolean }>`
  background-color: ${({ $accent }) =>
    $accent ? 'var(--accent-color)' : 'var(--border-color)'};
  border: 0;
  color: ${({ $accent }) =>
    $accent ? 'var(--accent-color)' : 'var(--border-color)'};
  height: ${({ $large }) => ($large ? borderSizeLarge : borderSize)};
  margin: ${spacing.small} auto;
`;
