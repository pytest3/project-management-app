import { createGlobalStyle } from 'styled-components';
import { COLORS, SPACING, FONT_SIZE } from '../constants';

const GlobalStyles = createGlobalStyle`
    
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html,
body,
#root {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
#root,
#__next {
  isolation: isolate;
}

ol,
ul {
  list-style: none;
  padding: 0;
}


// DESIGN TOKENS //

html {

  --color-white: ${COLORS.white};
  --color-offblack: ${COLORS.offblack};
  --color-gray-50: ${COLORS.gray[50]};
  --color-gray-100: ${COLORS.gray[100]};
  --color-gray-200: ${COLORS.gray[200]};
  
  --color-gray-300: ${COLORS.gray[300]};
  --color-gray-400: ${COLORS.gray[400]};
  --color-gray-500: ${COLORS.gray[500]};
  --color-gray-600: ${COLORS.gray[600]};
  --color-gray-700: ${COLORS.gray[700]};
  --color-gray-800: ${COLORS.gray[800]};
  --color-gray-900: ${COLORS.blueGray[900]};
  --color-blueGray-50: ${COLORS.blueGray[50]};
  --color-bluegray-100: ${COLORS.blueGray[100]};
  --color-blueGray-200: ${COLORS.blueGray[200]};
  --color-blueGray-300: ${COLORS.blueGray[300]};
  --color-blueGray-400: ${COLORS.blueGray[400]};
  --color-blueGray-500: ${COLORS.blueGray[500]};
  --color-blueGray-600: ${COLORS.blueGray[600]};
  --color-blueGray-700: ${COLORS.blueGray[700]};
  --color-blueGray-800: ${COLORS.blueGray[800]};
  --color-blueGray-900: ${COLORS.blueGray[900]};
  --color-blue-50: ${COLORS.blue[50]};
  --color-blue-100: ${COLORS.blue[100]};
  --color-blue-200: ${COLORS.blue[200]};
  --color-blue-300: ${COLORS.blue[300]};
  --color-blue-400: ${COLORS.blue[400]};
  --color-blue-500: ${COLORS.blue[500]};
  --color-blue-600: ${COLORS.blue[600]};
  --color-blue-700: ${COLORS.blue[700]};
  --color-blue-800: ${COLORS.blue[800]};
  --color-blue-900: ${COLORS.blue[900]};
  --color-blue-50: ${COLORS.blue[50]};
  --color-green-100: ${COLORS.green[100]};
  --color-green-200: ${COLORS.green[200]};
  --color-green-300: ${COLORS.green[300]};
  --color-green-400: ${COLORS.green[400]};
  --color-green-500: ${COLORS.green[500]};
  --color-green-600: ${COLORS.green[600]};
  --color-green-700: ${COLORS.green[700]};
  --color-green-800: ${COLORS.green[800]};
  --color-green-900: ${COLORS.green[900]};
  --color-red-300: ${COLORS.red[300]};
  --color-red-500: ${COLORS.red[500]};
  --color-red-700: ${COLORS.red[700]};

  /* Spacing 
  ===================================================================
  */

  --space-1: ${SPACING['1']};
  --stralluepace-2: ${SPACING['2']};
  --space-3: ${SPACING['3']};
  --space-4: ${SPACING['4']};
  --space-5: ${SPACING['5']};
  --space-6: ${SPACING['6']};
  --space-7: ${SPACING['7']};
  --space-8: ${SPACING['8']};
  --space-8: ${SPACING['9']};
  --space-8: ${SPACING['10']};
  --space-8: ${SPACING['11']};
  --space-8: ${SPACING['12']};
  --space-8: ${SPACING['13']};
  --space-8: ${SPACING['14']};
  --space-8: ${SPACING['15']};
  --space-8: ${SPACING['16']};


  /* TYPOGRAPHY
  ===================================================================
  */
  --font-size-1: ${FONT_SIZE['1']};
  --font-size-2: ${FONT_SIZE['2']};
  --font-size-3: ${FONT_SIZE['3']};
  --font-size-4: ${FONT_SIZE['4']};
  --font-size-5: ${FONT_SIZE['5']};
  --font-size-6: ${FONT_SIZE['6']};
  --font-size-7: ${FONT_SIZE['7']};
  --font-size-8: ${FONT_SIZE['8']};
  --font-size-9: ${FONT_SIZE['9']};
  --font-size-10: ${FONT_SIZE['10']};
  --font-size-11: ${FONT_SIZE['11']};







}




`;

export default GlobalStyles;
