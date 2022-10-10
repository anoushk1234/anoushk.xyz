import { createTheme, NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/app";
import Cursor from "../components/cursor";
import { theme } from "../styles/theme";
import "../styles/globals.css";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        defer
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
        src="https://analytics.metapasshq.xyz/umami.js"
      />
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
        {/* <Cursor /> */}
      </NextUIProvider>
    </>
  );
}

export default MyApp;
