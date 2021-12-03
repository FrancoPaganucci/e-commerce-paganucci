import { createGlobalStyle } from "styled-components";
import Montserrat from "../fonts/montserrat-v18-latin-regular.woff";
import Montserrat2 from "../fonts/montserrat-v18-latin-regular.woff2";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Montserrat';
  src: url(${Montserrat2}) format('woff2'),
       url(${Montserrat}) format('woff');
}
`;

export default FontStyles;