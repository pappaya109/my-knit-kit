import { globalStyle, globalFontFace } from '@vanilla-extract/css';

const globalFont = 'BMKkubulimTTF';

globalFontFace(globalFont, {
  src: 'url("/BMKkubulimTTF.ttf") format("truetype")',
});

globalStyle('html, body', {
  fontSize: '62.5%',
  margin: 0,
  fontFamily: `${globalFont}`,
});
