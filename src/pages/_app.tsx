import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../style/theme";
import "../style/global.css";
import "../style/fonts.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jonatan Lins</title>
        <meta name="theme-color" content={theme?.colors?.accent} />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
