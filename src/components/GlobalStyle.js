import { createGlobalStyle, css } from 'styled-components';

export const theme = {
  primary: '#0044e3',
  dark: '#010101',
  danger: '#F03009',
  warning: '#FFE310',
  success: '#26dc4e',
  light: '#fff',
  gray: '#eaeaea',
  fontFamilyBase: '\'Inter\', Roboto, Helvetica, Arial, sans-serif',
  fontFamilyMonospace: 'Inconsolota, Monaco, Consolas, monospace',
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightSemibold: 600,
  fontWeightBold: 700,
  fontWeightExtrabold: 800,
  fontWeightBlack: 900,
};

const fontSizeBaseValue = 16;
const breakpoints = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 375
};

// iterate through the breakpoints and create a media template
export const mediaUp = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = breakpoints[label] / fontSizeBaseValue;

    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `;

    return accumulator;
  },
  {}
);

export const mediaDown = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = (breakpoints[label] - 0.2) / fontSizeBaseValue;

    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `;

    return accumulator;
  },
  {}
);

export default createGlobalStyle`
@import url('https://rsms.me/inter/inter.css');
@import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700&display=swap');

/* Reboot
* Forked from Bootstrap 4's Reboot.scss. Purely CSS with CSS custom variables instead of Sass variables.
*
* Normalization of HTML elements, manually forked from Normalize.css to remove
* styles targeting irrelevant browsers while applying new styles.
*
* Normalize is licensed MIT. https:*github.com/necolas/normalize.css
*/


/* Document
*
* 1. Change from \`box-sizing: content-box\` so that \`width\` is not affected by \`padding\` or \`border\`.
* 2. Change the default font family in all browsers.
* 3. Correct the line height in all browsers.
* 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.
* 5. Change the default tap highlight to be completely transparent in iOS.
*/

:root {
    /* Colors */
    --white: ${theme.light};

    /* Typography */
    --font-family-sans-serif: ${theme.fontFamilyBase};
    --font-family-monospace: ${theme.fontFamilyMonospace};
    --font-family-base: var(--font-family-sans-serif);
    --font-size-base: 1rem;
    --font-weight-normal: ${theme.fontWeightNormal};
    --font-weight-bold: ${theme.fontWeightBold};
    --font-weight-bolder: ${theme.fontWeightExtrabold};
    --font-weight-base: var(--font-weight-normal);
    --line-height-base: 1.5;

    /* Body */
    --body-bg: var(--white);
    --body-color: ${theme.dark};

    /* Headings */
    --headings-margin-bottom: 0.5rem;

    /* Paragraphs */
    --paragraph-margin-bottom: 1rem;

    --dt-font-weight: var(--font-weight-bold);

    /* Link */
    --link-color: ${theme.dark};
    --link-decoration: underline;
    --link-hover-color: $theme.primary};
    --link-hover-decoration: underline;

    /* Table */
    --table-cell-padding: 0.75rem;
    --table-caption-color: ${theme.dark};

    /* Forms */
    --label-margin-bottom: 0.5rem;
}

*,
*::before,
*::after {
    box-sizing: border-box; /* 1 */
}

html {
    font-family: sans-serif; /* 2 */
    line-height: 1.15; /* 3 */
    -webkit-text-size-adjust: 100%; /* 4 */
    -webkit-tap-highlight-color: transparent; /* 5 */
}

/* Shim for "new" HTML5 structural elements to display correctly (IE10, older browsers) */

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}

/* Body
*
* 1. Remove the margin in all browsers.
* 2. As a best practice, apply a default \`background-color\`.
* 3. Set an explicit initial text-align value so that we can later use
*    the \`inherit\` value on things like \`<th>\` elements.
*/

body {
    margin: 0; /* 1 */
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-base);
    color: var(--body-color);
    text-align: left; /* 3 */
    background-color: var(--body-bg); /* 2 */
}

/* Suppress the focus outline on elements that cannot be accessed via keyboard.
* This prevents an unwanted focus outline from appearing around elements that
* might still respond to pointer events.
*
* Credit: https:*github.com/suitcss/base
*/

[tabindex="-1"]:focus {
    outline: 0 !important;
}


/* Content grouping
*
* 1. Add the correct box sizing in Firefox.
* 2. Show the overflow in Edge and IE.
*/

hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
}


/*
* Typography
*
* Remove top margins from headings
*
* By default, \`<h1>\`-\`<h6>\` all receive top and bottom margins. We nuke the top
* margin for easier control within type scales as it avoids margin collapsing.
*/

h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: var(--headings-margin-bottom);
}

/* Reset margins on paragraphs
*
* Similarly, the top margin on \`<p>\`s get reset. However, we also reset the
* bottom margin to use \`rem\` units instead of \`em\`.
*/
p {
    margin-top: 0;
    margin-bottom: var(--paragraph-margin-bottom);
}

/* Abbreviations
*
* 1. Duplicate behavior to the data-* attribute for our tooltip plugin
* 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
* 3. Add explicit cursor to indicate changed behavior.
* 4. Remove the bottom border in Firefox 39-.
* 5. Prevent the text-decoration to be skipped.
*/

abbr[title],
abbr[data-original-title] { /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
    cursor: help; /* 3 */
    border-bottom: 0; /* 4 */
    text-decoration-skip-ink: none; /* 5 */
}

address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
}

ol,
ul,
dl {
    margin-top: 0;
    margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
    margin-bottom: 0;
}

dt {
    font-weight: var(--font-weight-bold);
}

dd {
    margin-bottom: .5rem;
    margin-left: 0; /* Undo browser default */
}

blockquote {
    margin: 0 0 1rem;
}

b,
strong {
    font-weight: var(--font-weight-bolder); /* Add the correct font weight in Chrome, Edge, and Safari */
}

small {
    font-size: 80%; /* Add the correct font size in all browsers */
}

/*
* Prevent \`sub\` and \`sup\` elements from affecting the line height in
* all browsers.
*/

sub,
sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
}

sub { bottom: -.25em; }
sup { top: -.5em; }


/*
* Links
*/

a {
    color: var(--link-color);
    text-decoration: var(--link-decoration);
    background-color: transparent; /* Remove the gray background on active links in IE 10. */
}

a:hover {
    color: var(--link-hover-color);
    text-decoration: var(--link-hover-decoration);
}

/* And undo these styles for placeholder links/named anchors (without href)
* which have not been made explicitly keyboard-focusable (without tabindex).
* It would be more straightforward to just use a[href] in previous block, but that
* causes specificity issues in many other styles that are too complex to fix.
* See https:*github.com/twbs/bootstrap/issues/19402
*/

a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
}

a:not([href]):not([tabindex]):hover,
a:not([href]):not([tabindex]):focus {
    color: inherit;
    text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
    outline: 0;
}


/*
* Code
*/

pre,
code,
kbd,
samp {
    font-family: var(--font-family-monospace);
    font-size: 1em; /* Correct the odd \`em\` font sizing in all browsers. */
}

pre {
    /* Remove browser default top margin */
    margin-top: 0;
    /* Reset browser default of \`1em\` to use \`rem\`s */
    margin-bottom: 1rem;
    /* Don't allow content to break outside */
    overflow: auto;
}


/*
* Figures
*/

figure {
    /* Apply a consistent margin strategy (matches our type styles). */
    margin: 0 0 1rem;
}


/*
* Images and content
*/

img {
    vertical-align: middle;
    border-style: none; /* Remove the border on images inside links in IE 10-. */
}

svg {
    /*
    * Workaround for the SVG overflow bug in IE10/11 is still required.
    * See https:*github.com/twbs/bootstrap/issues/26878
    */
    overflow: hidden;
    vertical-align: middle;
}


/*
* Tables
*/

table {
    border-collapse: collapse; /* Prevent double borders */
}

caption {
    padding-top: var(--table-cell-padding);
    padding-bottom: var(--table-cell-padding);
    color: var(--table-caption-color);
    text-align: left;
    caption-side: bottom;
}

th {
    /*
    * Matches default \`<td>\` alignment by inheriting from the \`<body>\`, or the
    * closest parent with a set \`text-align\`.
    */
    text-align: inherit;
}


/*
* Forms
*/

label {
    /* Allow labels to use \`margin\` for spacing. */
    display: inline-block;
    margin-bottom: var(--label-margin-bottom);
}

/*
* Remove the default \`border-radius\` that macOS Chrome adds.
*
* Details at https:*github.com/twbs/bootstrap/issues/24093
*/

button {
    border-radius: 0;
}

/*
* Work around a Firefox/IE bug where the transparent \`button\` background
* results in a loss of the default \`button\` focus styles.
*
* Credit: https:*github.com/suitcss/base/
*/
button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
    margin: 0; /* Remove the margin in Firefox and Safari */
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

button,
input {
    overflow: visible; /* Show the overflow in Edge */
}

button,
select {
    text-transform: none; /* Remove the inheritance of text transform in Firefox */
}

/*
* Remove the inheritance of word-wrap in Safari.
*
* Details at https:*github.com/twbs/bootstrap/issues/24990
*/

select {
    word-wrap: normal;
}


/*
* 1. Prevent a WebKit bug where (2) destroys native \`audio\` and \`video\`
*    controls in Android 4.
* 2. Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type="button"], /* 1 */
[type="reset"],
[type="submit"] {
    -webkit-appearance: button; /* 2 */
}

/* Opinionated: add "hand" cursor to non-disabled button elements. */

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
    cursor: pointer;
}

/* Remove inner border and padding from Firefox, but don't restore the outline like Normalize. */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
    box-sizing: border-box; /* 1. Add the correct box sizing in IE 10- */
    padding: 0; /* 2. Remove the padding in IE 10- */
}


input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
    /*
    * Remove the default appearance of temporal inputs to avoid a Mobile Safari
    * bug where setting a custom line-height prevents text from being vertically
    * centered within the input.
    * See https:*bugs.webkit.org/show_bug.cgi?id=139848
    * and https:*github.com/twbs/bootstrap/issues/11266
    */
    -webkit-appearance: listbox;
}

textarea {
    overflow: auto; /* Remove the default vertical scrollbar in IE. */
    /* Textareas should really only resize vertically so they don't break their (horizontal) containers. */
    resize: vertical;
}

fieldset {
    /*
    * Browsers set a default \`min-width: min-content;\` on fieldsets,
    * unlike e.g. \`<div>\`s, which have \`min-width: 0;\` by default.
    * So we reset that to ensure fieldsets behave more like a standard block element.
    * See https:*github.com/twbs/bootstrap/issues/12359
    * and https:*html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements
        min-width: 0;
    * Reset the default outline behavior of fieldsets so they don't affect page layout.
    */
    padding: 0;
    margin: 0;
    border: 0;
}

/*
* 1. Correct the text wrapping in Edge and IE.
* 2. Correct the color inheritance from \`fieldset\` elements in IE.
*/

legend {
    display: block;
    width: 100%;
    max-width: 100%; /* 1 */
    padding: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit; /* 2 */
    white-space: normal; /* 1 */
}

progress {
    vertical-align: baseline; /* Add the correct vertical alignment in Chrome, Firefox, and Opera. */
}

/* Correct the cursor style of increment and decrement buttons in Chrome. */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

[type="search"] {
    /*
    * This overrides the extra rounded corners on search inputs in iOS so that our
    * \`.form-control\` class can properly style them. Note that this cannot simply
    * be added to \`.form-control\` as it's not specific enough. For details, see
    * https:*github.com/twbs/bootstrap/issues/11586.
    */
    outline-offset: -2px; /* 2. Correct the outline style in Safari. */
    -webkit-appearance: none;
}

/*
* Remove the inner padding in Chrome and Safari on macOS.
*/

[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

/*
* 1. Correct the inability to style clickable types in iOS and Safari.
* 2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
    font: inherit; /* 2 */
    -webkit-appearance: button; /* 1 */
}

/*
* Correct element displays
*/

output {
    display: inline-block;
}

summary {
    display: list-item; /* Add the correct display in all browsers */
    cursor: pointer;
}

template {
    display: none; /* Add the correct display in IE */
}

/*
* Always hide an element with the \`hidden\` HTML attribute (from PureCSS).
* Needed for proper display in IE 10-.
*/

[hidden] {
    display: none !important;
}
`;