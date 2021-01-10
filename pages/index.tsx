import { Box, Button, Stack, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Card from "../components/Dumb/Card/Card";
import Search from "../components/Dumb/Search/Search";
import ContainerNormal from "../components/Dumb/Container/ContainerNormal";
import ClientLayout from "../components/Layout/ClientLayout/ClientLayout";
import { FC } from "react";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../types/PageLayoutWithType";

interface Props {}

const Home: FC<Props> = function () {
  return (
    <ContainerNormal>
      <Head>
        <title>My Blog - duongductrong06</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mt={10}>
        <Text fontSize="5xl" fontWeight="bold">
          First, say hello
        </Text>
        <Text fontSize="lg">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Text>
      </Box>

      <Search />

      <Box mt={10}>
        <Text fontSize="5xl" fontWeight="bold">
          All posts
        </Text>

        <VStack spacing={1}>
          {[1, 2, 3, 4, 5, 6].map((k) => (
            <Card key={k} />
          ))}
        </VStack>
      </Box>
      <Box textAlign="center" mb={5}>
        <Button isLoading variant="outline" mt={5}>
          Xem thêm
        </Button>
      </Box>
    </ContainerNormal>
  );
};

const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

(Home as PageWithLayoutType).Layout = ClientLayout;

export default Home;
