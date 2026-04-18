import { style } from '@vanilla-extract/css';
import { createRoughFramePseudo } from '../../styles/roughFrame';

const buttonBase = {
  color: '#ffffff',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingInline: 18,
  paddingBlock: 0,
  position: 'relative',
  borderRadius: 8,
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  textDecoration: 'none',
  border: 0,
  font: 'inherit',
  cursor: 'pointer',
} as const;

export const root = style(buttonBase);

export const label = style({
  position: 'relative',
  zIndex: 1,
  fontSize: '1.5rem',
});

export const accept = style({
  selectors: {
    '&::after': createRoughFramePseudo({ fillColor: '#FFBFBF' }),
  },
});

export const cancel = style({
  selectors: {
    '&::after': createRoughFramePseudo({ fillColor: '#C97A7A' }),
  },
});
