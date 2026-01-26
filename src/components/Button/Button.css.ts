import { style } from '@vanilla-extract/css';

const ButtonBase = style({
  color: '#ffffff',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const accept = style([
  ButtonBase,
  {
    background: '#FFBFBF',
  },
]);

export const cancel = style([
  ButtonBase,
  {
    background: '#C97A7A',
  },
]);
