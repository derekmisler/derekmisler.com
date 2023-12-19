'use client';

import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { StyledComponentProps, LAYOUT_DEFAULTS } from 'styles/layout';

interface StyledAnimatedProps extends StyledComponentProps {
  $animated?: boolean;
}

interface AnimatedProps extends StyledAnimatedProps {
  $delay?: number;
}

const animationEndCss = css`
  opacity: 1;
  transform: translateY(0);
`;

const StyledAnimated = styled.div<StyledAnimatedProps>`
  opacity: 0.1;
  transform: translateY(1rem);
  transition: ${LAYOUT_DEFAULTS.transition};
  will-change: transform;
  ${(props) => props.$animated && animationEndCss}
`;

export const Animated = ({ $delay = 0, children }: AnimatedProps) => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    if (animated) return;
    const timer = setTimeout(() => {
      setAnimated(true);
    }, $delay);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [$delay]);

  return <StyledAnimated $animated={animated}>{children}</StyledAnimated>;
};
