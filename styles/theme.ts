// 1. Import `createTheme`
import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

// 2. Call `createTheme` and pass your custom values
export const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "gray",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
