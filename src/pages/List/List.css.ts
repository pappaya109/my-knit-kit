import { style } from '@vanilla-extract/css';
import ziggleOutline from '../../assets/ziggle_outline.svg';

export const page = style({
  backgroundColor: '#fff',
  color: '#4a3728',
  width: '100%',
  minHeight: '100dvh',
  paddingInline: 24,
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 390,
      minHeight: 'calc(100dvh  - 80px)',
      overflowY: 'auto',
    },
  },
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  paddingTop: 18,
  paddingBottom: 6,
});

export const folderIcon = style({
  width: 28,
  height: 24,
  flexShrink: 0,
});

export const title = style({
  margin: 0,
  marginBottom: -10,
  fontSize: '2rem',
  fontWeight: 400,
  letterSpacing: '0.1em',
});

export const divider = style({
  width: '100%',
  height: 16,
  backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" viewBox="0 0 40 16">
      <path d="M0 8 C5 3, 10 13, 20 8 C30 3, 35 13, 40 8"
            fill="none" stroke="#c5a5a5" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `)}")`,
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'center',
  marginBottom: 20,
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: 52,
  padding: '10px 40px',
  boxSizing: 'border-box',
  fontSize: '1.6rem',
  color: '#4a3728',
  textAlign: 'left',
  backgroundImage: `url(${ziggleOutline})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
});

export const itemContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: 5,
  paddingTop: 3,
});

export const addSign = style({
  width: 20,
  height: 20,
});

export const categoryIcon = style({
  width: 32,
  height: 32,
  objectFit: 'contain',
  flexShrink: 0,
});

export const errorText = style({
  fontSize: '1.4rem',
  color: '#9b4b4b',
  textAlign: 'center',
  paddingTop: 40,
});
