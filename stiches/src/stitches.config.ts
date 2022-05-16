import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
      purple400: 'blueviolet',
      purple500: 'darkviolet',
      red400: 'tomato',
      red500: '#cc0000',

      primary: '$purple400',
      primaryDark: '$purple500',
      secondary: '#22b8cf',
      secondaryDark: '#1f9d9d',
    },
    space: {
      1: '10px',
      2: '20px',
    },
    fontSizes: {},
  },

  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    mx: (value: any) => ({ marginLeft: value, marginRight: value }),
    px: (value: any) => ({ paddingLeft: value, paddingRight: value }),
  },
});
