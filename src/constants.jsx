/* COLORS
============================================================================== 
*/

export const COLORS = {
  white: 'hsl(0, 0%, 100%)',
  offblack: 'hsl(24 5% 6%)',
  // 50-200: background layers
  // 200-300: borders
  // 400: field borders such as text field, action buttons
  // 700-900: text content
  gray: {
    50: 'hsl(0, 0%, 98%)',
    100: 'hsl(0, 0%, 96%)',
    200: 'hsl(0, 0%, 93%)', // decorative and app framing borders
    300: 'hsl(0, 0%, 88%)', // decorative and app framing borders
    400: 'hsl(0, 0%, 74%)', // field borders such as text field, action buttons
    500: 'hsl(0, 0%, 62%)', // disabled text / icon
    600: 'hsl(0, 0%, 46%)', // control borders (such as in a switch, radio buttons, and a checkbox).
    700: 'hsl(0, 0%, 38%)', // subdued text / icon
    800: 'hsl(0, 0%, 26%)', // text / icon
    900: 'hsl(0, 0%, 13%)', // heading
  },
  blueGray: {
    50: 'hsl(204, 15%, 94%)',
    100: 'hsl(198, 16%, 84%)',
    200: 'hsl(200, 15%, 73%)',
    300: 'hsl(200, 16%, 62%)',
    400: 'hsl(200, 15%, 54%)',
    500: 'hsl(200, 18%, 46%)',
    600: 'hsl(199, 18%, 40%)',
    700: 'hsl(199, 18%, 33%)',
    800: 'hsl(200, 18%, 26%)',
    900: 'hsl(200, 19%, 18%)',
  },
  blue: {
    50: 'hsl(205, 87%, 94%)',
    100: 'hsl(207, 89%, 86%)',
    200: 'hsl(207, 90%, 77%)',
    300: 'hsl(207, 89%, 68%)',
    400: 'hsl(207, 90%, 61%)',
    500: 'hsl(207, 90%, 54%)',
    600: 'hsl(208, 79%, 51%)',
    700: 'hsl(210, 79%, 46%)',
    800: 'hsl(212, 80%, 42%)',
    900: 'hsl(216, 85%, 34%)',
  },
  green: {
    50: 'hsl(167, 41%, 91%)',
    100: 'hsl(165, 39%, 79%)',
    200: 'hsl(165, 39%, 65%)',
    300: 'hsl(165, 38%, 52%)',
    400: 'hsl(165, 51%, 42%)',
    500: 'hsl(164, 65%, 35%)',
    600: 'hsl(164, 65%, 32%)',
    700: 'hsl(162, 67%, 28%)',
    800: 'hsl(162, 71%, 23%)',
    900: 'hsl(159, 80%, 16%)',
  },
  red: {
    300: 'hsl(14, 100%, 70%)',
    500: 'hsl(14, 100%, 57%)',
    700: 'hsl(14, 80%, 50%)',
    900: 'hsl(14, 88%, 40%)',
  },
};

/* SPACING
============================================================================== 
*/ // For Margin, Padding

const BASE_UNIT = 16;
export const SPACING = {
  1: `${BASE_UNIT * 0.25}px`, // 4px
  2: `${BASE_UNIT * 0.5}px`, // 8px
  3: `${BASE_UNIT * 0.75}px`, // 12px
  4: `${BASE_UNIT * 1}px`, // 16px
  5: `${BASE_UNIT * 1.5}px`,
  6: `${BASE_UNIT * 2}px`,
  7: `${BASE_UNIT * 3}px`,
  8: `${BASE_UNIT * 4}px`,
  9: `${BASE_UNIT * 6}px`,
  10: `${BASE_UNIT * 8}px`,
  11: `${BASE_UNIT * 12}px`,
  12: `${BASE_UNIT * 16}px`,
  13: `${BASE_UNIT * 24}px`,
  14: `${BASE_UNIT * 32}px`,
  15: `${BASE_UNIT * 40}px`,
  16: `${BASE_UNIT * 48}px`,
};

/* BREAKPOINTS
============================================================================== 
*/

const BREAKPOINTS = {
  mobileMax: 550,
  tabletMax: 1100,
  laptopMax: 1500,
};

// desktop first //
export const QUERIES = {
  mobileAndBelow: `max-width:${BREAKPOINTS.mobileMax / 16}rem`,
  tabletAndBelow: `max-width:${BREAKPOINTS.tabletMax / 16}rem`,
  laptopAndBelow: `max-width:${BREAKPOINTS.laptopMax / 16}rem`,
};

/* TYPOGRAPHY 
============================================================================== 
*/

// FONT-WEIGHT
export const FONT_WEIGHTS = {
  lighter: 100,
  light: 250,
  normal: 400,
  medium: 550,
  bold: 700,
  bolder: 900,
};

//FONT-SIZE
const BASE_FONT_UNIT = 16;

export const FONT_SIZE = {
  1: `${12 / BASE_FONT_UNIT}rem`,
  2: `${14 / BASE_FONT_UNIT}rem`,
  3: `${16 / BASE_FONT_UNIT}rem`, // 1rem
  4: `${18 / BASE_FONT_UNIT}rem`,
  5: `${20 / BASE_FONT_UNIT}rem`,
  6: `${24 / BASE_FONT_UNIT}rem`,
  7: `${30 / BASE_FONT_UNIT}rem`,
  8: `${36 / BASE_FONT_UNIT}rem`,
  9: `${48 / BASE_FONT_UNIT}rem`,
  10: `${60 / BASE_FONT_UNIT}rem`,
  11: `${72 / BASE_FONT_UNIT}rem`,
};

//LINE-HEIGHT
const BASE_LINE_UNIT = 1;
export const LINE_HEIGHT = {
  small: `${BASE_LINE_UNIT * 1.1}px`,
  medium: `${BASE_LINE_UNIT * 1.3}px`, // recommended for headings
  large: `${BASE_LINE_UNIT * 1.5}px`, // recommended for body text
};

/* Border 
============================================================================== 
*/

export const BORDER_RADIUS = {
  small: '2px',
  medium: '4px',
  large: '8px',
  larger: '16px',
};
