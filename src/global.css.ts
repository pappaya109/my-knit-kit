import { globalStyle, globalFontFace } from '@vanilla-extract/css';

const globalFont = 'Griun_Gyuwon-Rg';

globalFontFace(globalFont, {
  src: 'url("/Griun_Gyuwon-Rg.ttf") format("truetype")',
});

globalStyle('html, body', {
  fontSize: '62.5%',
  margin: 0,
  fontFamily: `${globalFont}`,
  backgroundColor: '#FFF3F3',
  color: '#4a3728',
});

globalStyle('body', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100dvh',
});
