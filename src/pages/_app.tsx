import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../style/theme";
import GlobalStyle from "../style/GlobalStyle";
import "../style/fonts.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jonatan Lins</title>
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
