import { createTheme, NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/app";
import Cursor from "../components/cursor";
import { theme } from "../styles/theme";
import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>anoushk</title>
        {/* <link rel="icon" href="https://i.imgur.com/BgjRmPg.jpg" /> */}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Script
        async
        defer
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
        src="https://analytics.metapasshq.xyz/umami.js"
      />
      <Script src="/theme.js" strategy="beforeInteractive" />
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
        {/* <Cursor /> */}
      </NextUIProvider>
    </>
  );
}

export default MyApp;
