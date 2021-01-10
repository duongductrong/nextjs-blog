import React, { FC, ReactElement } from "react";
import Footer from "../../Smart/Footer/Footer";
import Navbar from "../../Smart/Navbar/Navbar";

interface Props {}

const ClientLayout: FC<Props> = function ({ children }): ReactElement {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default ClientLayout;
