import { style } from '@vanilla-extract/css';
import { createRoughFramePseudo } from '../../styles/roughFrame';

export const page = style({
  minHeight: '100vh',
  backgroundColor: '#fff',
  color: '#4a3728',
  maxWidth: 480,
  margin: '0 auto',
  paddingInline: 24,
  boxSizing: 'border-box',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  paddingTop: 28,
  paddingBottom: 16,
});

export const folderIcon = style({
  width: 28,
  height: 24,
  flexShrink: 0,
});

export const title = style({
  margin: 0,
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
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minHeight: 52,
  padding: '10px 20px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 0,
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '1.6rem',
  color: '#4a3728',
  textAlign: 'left',
  boxSizing: 'border-box',
  selectors: {
    '&::after': createRoughFramePseudo({ fillColor: '#fff' }),
  },
});

export const itemContent = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const addSign = style({
  fontSize: '1.8rem',
  lineHeight: 1,
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
