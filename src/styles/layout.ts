import { HTMLProps, PropsWithRef, PropsWithChildren } from 'react';

export type SmMdLgSizes = 'small' | 'medium' | 'large';

export interface SmMdLgTypes {
  small: string;
  medium: string;
  large: string;
}

export interface DesktopMobile {
  desktop: string;
  mobile: string;
}

export interface StyledComponentProps
  extends PropsWithChildren<PropsWithRef<HTMLProps<HTMLDivElement>>> {
  as?: string;
}

export type FlexAlignment =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'baseline';

export const BREAKPOINTS = {
  mobile: '64em',
  desktop: '64.063em',
};

export const TRANSITION_DEFAULTS = {
  durationFast: '230ms',
  duration: '500ms',
  property: 'all',
  timing: 'cubic-bezier(.68, -.55, .265, 1.55)',
};

export const LAYOUT_DEFAULTS = {
  borderRadius: '1px',
  borderSize: '.85rem',
  borderSizeSmall: '.125rem',
  borderSizeLarge: '1.95rem',
  borderStyle: 'solid',
  blur: '3px',
  transition: `${TRANSITION_DEFAULTS.duration} ${TRANSITION_DEFAULTS.property} ${TRANSITION_DEFAULTS.timing}`,
  mediaQueries: {
    mobile: `screen and (max-width: ${BREAKPOINTS.mobile})`,
    desktop: `screen and (min-width: ${BREAKPOINTS.desktop})`,
    fullHeight: `screen and (max-height: 100vh)`,
  },
  dropShadow: {
    small: '.1rem',
    medium: '.2rem',
    large: '.4rem',
  },
  spacing: {
    small: '.5rem',
    medium: '1.25rem',
    large: '2.75rem',
  },
  widths: {
    small: '50%',
    medium: '66%',
    large: '90%',
  },
};
