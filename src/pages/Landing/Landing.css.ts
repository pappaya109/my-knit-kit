import { style } from '@vanilla-extract/css';
import backgrondImg from '../../assets/background.svg';

export const container = style({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
export const background = style({
  backgroundImage: `url(${backgrondImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '33.9rem',
  height: '62.8rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  bottom: 12,
  // justifyContent: 'space-between',
});
export const ribbon = style({
  position: 'relative',
  bottom: 13,
});

export const iconArea = style({
  height: 300,
  width: '90%',
  display: 'flex',
  flexGrow: 0,
  justifyContent: 'center',
  alignItems: 'start',
  position: 'relative',
  marginTop: 50,
});

export const button = style({
  width: 169,
  height: 50,
  borderRadius: 6,
  fontSize: '1.6rem',
  cursor: 'pointer',
});

export const iconImage = style({
  maxHeight: 192,
});

export const starIcon = style({
  position: 'absolute',
  pointerEvents: 'none',
});

export const starTopLeftLarge = style([
  starIcon,
  {
    top: -10,
    left: 30,
    width: 56,
  },
]);

export const starTopLeftSmall = style([
  starIcon,
  {
    top: -50,
    left: 78,
    width: 34,
  },
]);

export const starRightSmall = style([
  starIcon,
  {
    top: 132,
    right: 44,
    width: 34,
  },
]);

export const starBottomRightLarge = style([
  starIcon,
  {
    top: 198,
    right: 68,
    width: 56,
  },
]);
