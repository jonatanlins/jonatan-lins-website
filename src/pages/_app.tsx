import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../style/theme";
import "../style/global.css";
import "../style/fonts.css";

export const siteTitle = "Jonatan Lins";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="theme-color" content={theme?.colors?.accent} />
        <meta name="description" content="Meu site pessoal, blog e portfólio" />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content={`/images/brand/banner.png`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
