import { createTheme, NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/app";
import Cursor from "../components/cursor";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
      {/* <Cursor /> */}
    </NextUIProvider>
  );
}

export default MyApp;
