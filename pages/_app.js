import React from "react";
import Providers from "@providers/index";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  //
  const getLayout = Component.getLayout || ((page) => page);
  //
  return (
    <Providers pageProps={pageProps}>
      {getLayout(<Component {...pageProps} />)}
    </Providers>
  );
}

export default MyApp;
