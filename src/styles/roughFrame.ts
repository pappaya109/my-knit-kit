const roughFramePath =
  'M28 12 ' +
  'C23.7 11.3, 19.5 13.9, 19.4 18.8 ' +
  'C19.3 22.3, 17 25.2, 18.1 28.7 ' +
  'C19.1 32.1, 17 35.1, 18.2 38.6 ' +
  'C19.4 42.1, 17.1 45.1, 18.4 48.7 ' +
  'C19.7 52.1, 17.6 55.1, 19.1 58.4 ' +
  'C20.9 62.3, 24.9 60.2, 29.3 61.6 ' +
  'C33.6 63, 37.6 59.9, 42 61.1 ' +
  'C46.4 62.3, 50.5 58.7, 55 60.3 ' +
  'C59.6 61.9, 63.8 59.1, 68.4 60.4 ' +
  'C73 61.8, 77.3 57.5, 82 59.6 ' +
  'C86.7 61.7, 91 58.9, 95.6 60.1 ' +
  'C100.2 61.2, 104.6 57.7, 109.3 59.7 ' +
  'C114 61.6, 118.4 58.8, 123.1 60.5 ' +
  'C127.8 62.2, 132.2 59.7, 136.9 60.4 ' +
  'C141.5 61.1, 145.9 58, 150.6 60 ' +
  'C155.1 61.9, 159.5 59.6, 164 60.5 ' +
  'C168.5 61.4, 172.6 58.3, 177 59.6 ' +
  'C181.4 60.9, 185.2 58.1, 186.6 54.1 ' +
  'C187.7 50.7, 185.7 47.8, 186.9 44.2 ' +
  'C188.1 40.7, 185.8 37.7, 186.9 34.2 ' +
  'C188 30.8, 186 27.9, 187 24.4 ' +
  'C188 20.9, 185.9 17.7, 186 14.1 ' +
  'C185.5 10.2, 181.3 9.3, 177 9.8 ' +
  'C172.6 10.2, 168.5 8, 164 9.7 ' +
  'C159.5 11.3, 155.1 8.8, 150.6 9.5 ' +
  'C145.9 10.2, 141.5 7.2, 136.9 9.2 ' +
  'C132.2 11.2, 127.8 8.7, 123.1 10.4 ' +
  'C118.4 12.1, 114 9.3, 109.3 10.2 ' +
  'C104.6 11.2, 100.2 7.8, 95.6 9.8 ' +
  'C91 11.8, 86.7 9, 82 10.2 ' +
  'C77.3 11.4, 73 7.3, 68.4 9.5 ' +
  'C63.8 11.6, 59.6 8.8, 55 10.1 ' +
  'C50.5 11.4, 46.4 7.8, 42 9.4 ' +
  'C37.6 11.1, 33.6 8.3, 29.3 9.8 ' +
  'C28.7 10.4, 28.3 11, 28 12 Z';

interface RoughFrameOptions {
  fillColor: string;
  strokeColor?: string;
  strokeWidth?: number;
}

export const createRoughFrameDataUrl = ({
  fillColor,
  strokeColor = '#6b4d4d',
  strokeWidth = 3.6,
}: RoughFrameOptions) =>
  `url("data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" preserveAspectRatio="none">
  <path d="${roughFramePath}" fill="${fillColor}" />
  <path
    d="${roughFramePath}"
    fill="none"
    stroke="${strokeColor}"
    stroke-width="${strokeWidth}"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`)}")`;

export const roughFrameInset = '-2px';

export const createRoughFramePseudo = (options: RoughFrameOptions) => ({
  content: '',
  position: 'absolute' as const,
  inset: roughFrameInset,
  backgroundImage: createRoughFrameDataUrl(options),
  backgroundRepeat: 'no-repeat' as const,
  backgroundPosition: 'center' as const,
  backgroundSize: '100% 100%' as const,
  pointerEvents: 'none' as const,
  zIndex: 0,
});
