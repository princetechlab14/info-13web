import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "#f0f0f0",
        },
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Toaster position="bottom-center" />
    </ChakraProvider>
  );
}
