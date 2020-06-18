import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    primary: '#0070f3',
  },
}


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="style.css" />
        <link
          href="//db.onlinewebfonts.com/c/561f38b1f4570de0fb8a39d691ab058c?family=Tungsten+Bold"
          rel="stylesheet"
          type="text/css"
        />
        <title>Jonatan Lins</title>
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      
      <style jsx global>{`
        body {
          margin: 0;
          font-size: 16px;
          font-family: DINNextW05-Bold, arial, georgia, sans-serif;
        }
      `}</style>
    </>
  );
}

export default App;
