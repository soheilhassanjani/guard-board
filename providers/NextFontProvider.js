import React from "react";
import { IRANSansX } from "@theme/fonts";

const NextFontProvider = ({ children }) => {
  return (
    <div className={`${IRANSansX.variable} font-iran-sans-x`}>{children}</div>
  );
};

export default NextFontProvider;
