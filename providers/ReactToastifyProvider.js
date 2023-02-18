import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactToastifyProvider = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        closeOnClick={false}
        draggable={false}
        theme="colored"
        newestOnTop
        rtl
        limit={3}
      />
    </>
  );
};

export default ReactToastifyProvider;
