import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../style/theme";
import "../style/global.css";
import "../style/fonts.css";
import bannerImage from "../assets/images/brand/banner.png";

const title = "Jonatan Lins";
const description = "Meu site pessoal, blog e portfólio";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="theme-color" content={theme?.colors?.accent} />
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary" />

        <meta property="og:title" content={title} />
        <meta property="og:image" content={bannerImage} />
        <meta property="og:description" content={description} />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
