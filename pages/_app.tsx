/**
 *
 * Note: This file is root
 *
 * Author: Duong Duc Trong
 * Github: https://github.com/duongductrong
 * Contact for work at: duongductrong06@gmail.com
 */

import { AppProps } from "next/dist/next-server/lib/router/router";
import { extendTheme, ChakraProvider, Spinner } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import { config, breakpoints } from "../configs/theme-chakra";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FC, Fragment, ReactNode, useEffect, useState } from "react";

import { DefaultSeo } from "next-seo";
import CustomSEO from "../next-seo.config";

const theme = extendTheme({ config, breakpoints });

interface AppLayoutProps extends AppProps {
  Component: NextPage & { Layout: (props: ReactNode) => JSX.Element };
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const [routing, setRouting] = useState<Boolean>(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      console.log("loading");
      setRouting(true);
    });

    router.events.on("routeChangeComplete", () => {
      setRouting(false);
      console.log("done");
    });

    return () => {
      router.events.off("routeChangeStart", () => {
        console.log("loading");
      });

      router.events.off("routeChangeComplete", () => {
        console.log("done");
      });
    };
  }, []);

  const LayoutRender: FC = Component.Layout ? Component.Layout : Fragment;

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Global
        styles={css`
          html {
            font-size: 16px;
            line-height: 1.5;
            font-family: "Inter", sans-serif;
          }
          body {
            font-family: "Inter", sans-serif;
          }

          pre {
            border-radius: 0.225rem;
          }

          table {
            padding: 0;
          }
          table tr {
            border-top: 1px solid #cccccc;
            background-color: inherit;
            margin: 0;
            padding: 0;
          }
          table tr:nth-of-type(2n) {
            background-color: #f8f8f8;
          }
          body.chakra-ui-dark table tr:nth-of-type(2n) {
            background: #232b3d;
          }
          table tr th {
            font-weight: bold;
            border: 1px solid #cccccc;
            text-align: left;
            margin: 0;
            padding: 6px 13px;
          }
          table tr td {
            border: 1px solid #cccccc;
            text-align: left;
            margin: 0;
            padding: 6px 13px;
          }
          table tr th :first-of-type,
          table tr td :first-of-type {
            margin-top: 0;
          }
          table tr th :last-child,
          table tr td :last-child {
            margin-bottom: 0;
          }
        `}
      />
      
      <DefaultSeo {...CustomSEO} />

      <LayoutRender>
        <Component {...pageProps} />
      </LayoutRender>
      {routing ? (
        <Spinner size="md" position="fixed" bottom={5} right={5} />
      ) : (
        <></>
      )}
    </ChakraProvider>
  );
}
export default MyApp;
