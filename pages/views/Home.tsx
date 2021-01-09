import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Card from "../../components/Dumb/Card/Card";
import Search from "../../components/Dumb/Search/Search";

const Home: React.FC = function () {
  return (
    <Box maxW="800px" mx="auto" px={{ base: 5, xl: 0 }}>
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
    </Box>
  );
};

export default Home;
