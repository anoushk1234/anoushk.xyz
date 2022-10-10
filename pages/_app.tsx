import { createTheme, NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/app";
import Cursor from "../components/cursor";
import { theme } from "../styles/theme";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <script
        async
        defer
        data-website-id="1e1b1955-80e7-4008-93d3-45035031588b"
        src="https://analytics.metapasshq.xyz/umami.js"
      ></script>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
        {/* <Cursor /> */}
      </NextUIProvider>
    </>
  );
}

export default MyApp;
