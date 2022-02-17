import { GlobalStyle } from "../styles/globals";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";

import ConfigHead from "../src/infra/components/ConfigHead";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <ConfigHead />

      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
