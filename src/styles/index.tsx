import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
  --darkPurple: #0E0C1A;
  --mediumPurple: #1D1833;
  --lightPurple: #5E38FF; 
  --lightPink: #E069B0;  
  --snow: #D0CEEA;
  --lightSnow: #E8E8F9;
  --mediumSnow: #b1b1c2;
  --darkSnow: #88869c;
  --lightGreen: #33a791;
  --lightBlue: #3E96E6;
  --lightYellow: #3029E2;
}
 
body {
  font-family: 'Ubuntu', sans-serif;
  background-color: var(--darkPurple);
  padding: 0;
  margin: 0;
}

h1,h2,h3,h4,h5,h6,a,button,select, textarea, option, input{
  font-family: 'Ubuntu', sans-serif;
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
`;
