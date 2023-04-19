import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@gw/design-system/styles/theme";
import { GlobalStyle } from "@gw/design-system/styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
