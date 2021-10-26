import React from "react";
import { Global, css } from "@emotion/react";

export const GlobalStyle = (props) => (
  <Global
    {...props}
    styles={css`
      html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        width: 100%;
        height: 100%;
      }
      body {
        margin: 0;
        width: 100vw !important;
        max-width: 100% !important;
        overflow: hidden !important;
        overflow-y: scroll !important;
      }
      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: 400;
      }
    `}
  />
);

export default GlobalStyle;
