import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import "../style/global.css";
import "../style/fonts.css";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="style.css" />
        <title>Jonatan Lins</title>
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
