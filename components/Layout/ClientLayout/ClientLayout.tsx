import { NextSeo } from "next-seo";
import React, { FC, ReactElement } from "react";
import CustomSEO from "../../../next-seo.config";
import Footer from "../../Smart/Footer/Footer";
import Navbar from "../../Smart/Navbar/Navbar";

interface Props {}

const ClientLayout: FC<Props> = function ({ children }): ReactElement {
  return (
    <>
      <NextSeo noindex={false} nofollow={false} {...CustomSEO} />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default ClientLayout;
