import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactElement } from "react";
import ContainerNormal from "../components/Dumb/Container/ContainerNormal";
import Search from "../components/Dumb/Search/Search";
import ClientLayout from "../components/Layout/ClientLayout/ClientLayout";
import PageWithLayoutType from "../types/PageLayoutWithType";

interface Props {}

function Page404({}: Props): ReactElement {
  return (
    <ContainerNormal maxW="992px">
      <Head>
        <title>My Blog - duongductrong06</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mt={10}>
        <Text fontSize="5xl" fontWeight="bold" mb={5}>
          404 Not found this page.
        </Text>
        <Text fontSize="2xl">
          Sorry bro, i can't not found this page, something wrong!!
        </Text>
        <Text fontSize="2xl">Can you try it again ?</Text>
      </Box>

      <Search />
    </ContainerNormal>
  );
}

(Page404 as PageWithLayoutType).Layout = ClientLayout;

export default Page404;
