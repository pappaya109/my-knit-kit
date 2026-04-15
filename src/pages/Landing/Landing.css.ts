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
  // background: 'red',
  marginTop: 100,
  // position: 'relative',
  // bottom: 30
});

export const button = style({
  width: 169,
  height: 50,
  borderRadius: 6,
  fontSize: '1.6rem',
});

export const iconImage = style({
  maxHeight: 192,
});
