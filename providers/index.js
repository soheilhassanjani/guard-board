import React from "react";
import ReactQueryProvider from "@providers/ReactQueryProvider";
import NextFontProvider from "@providers/NextFontProvider";
import ReactToastifyProvider from "@providers/ReactToastifyProvider";
import ReduxToolkitProvider from "@providers/ReduxToolkitProvider";

const Providers = ({ children, pageProps }) => {
  return (
    <ReduxToolkitProvider>
      <ReactQueryProvider dehydratedState={pageProps.dehydratedState}>
        <NextFontProvider>
          <ReactToastifyProvider>{children}</ReactToastifyProvider>
        </NextFontProvider>
      </ReactQueryProvider>
    </ReduxToolkitProvider>
  );
};

export default Providers;
