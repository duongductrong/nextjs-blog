/**
 *
 * Note: This file is root
 *
 * Author: Duong Duc Trong
 * Github: https://github.com/duongductrong
 * Contact for work at: duongductrong06@gmail.com
 */

import { AppProps } from "next/dist/next-server/lib/router/router";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import Navbar from "./containers/components/Smart/Navbar";

import { config, breakpoints } from "../configs/theme-chakra";

const theme = extendTheme({ config, breakpoints });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Global
        styles={css`
          html {
            font-size: 16px;
            line-height: 1.5;
            font-family: "Inter", sans-serif;
          }
          body {
            font-family: "Inter", sans-serif;
          }
        `}
      />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
