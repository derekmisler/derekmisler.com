'use client';
import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Small } from 'components/atoms/Typography';
import { DEFAULT_TEXT_STYLES } from 'styles/typography';
import { LAYOUT_DEFAULTS, TRANSITION_DEFAULTS } from 'styles/layout';

const {
  borderSize,
  borderSizeSmall,
  borderSizeLarge,
  borderStyle,
  borderRadius,
  spacing,
  blur,
} = LAYOUT_DEFAULTS;

const { timing, duration } = TRANSITION_DEFAULTS;

interface ToggleProps {
  onToggle: () => void;
  isActive: boolean;
}

const ToggleWrapper = styled.button`
  ${DEFAULT_TEXT_STYLES}
  border: 0;
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${spacing.small} ${spacing.medium};
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 3;
  background-color: var(--background-transparent-color);
  backdrop-filter: blur(${blur});
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const ToggleSlider = styled.div<{ $isActive?: boolean }>`
  height: calc(${borderSize} + (${borderSizeSmall} * 2));
  width: ${borderSizeLarge};
  border-radius: ${borderRadius};
  padding: 0;
  margin: 0 ${spacing.small};
  position: relative;
  appearance: none;
  outline: none;
  background-color: transparent;
  overflow: hidden;
  border: ${borderSizeSmall} ${borderStyle} var(--link-color);

  &::before {
    content: '';
    position: absolute;
    width: calc(${borderSize} - ${borderSizeSmall});
    border-radius: ${borderRadius};
    background-color: var(--link-color);
    transition: ${timing} left ${duration};
    left: ${({ $isActive }) => ($isActive ? borderSize : borderSizeSmall)};
    top: ${borderSizeSmall};
    bottom: ${borderSizeSmall};
  }
`;

export const Toggle = ({ onToggle, isActive }: ToggleProps) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Small>Dark</Small>
      <ToggleSlider $isActive={isActive} />
      <Small>Light</Small>
    </ToggleWrapper>
  );
};
