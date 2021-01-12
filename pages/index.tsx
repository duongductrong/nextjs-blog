import { Box, Button, Text, VStack } from "@chakra-ui/react";
import Card from "../components/Dumb/Card/Card";
import Search from "../components/Dumb/Search/Search";
import ContainerNormal from "../components/Dumb/Container/ContainerNormal";
import ClientLayout from "../components/Layout/ClientLayout/ClientLayout";
import { FC, ReactElement } from "react";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../types/PageLayoutWithType";
import PostService from "../core/services/PostService";
interface Props {
  posts: Array<any>;
}

const Home: FC<Props> = function ({ posts }): ReactElement {
  return (
    <ContainerNormal>
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
          {posts.length !== 0
            ? posts.map((card, index) => (
                <Card
                  title={card.title}
                  link={`/blog/${card.alias}`}
                  description={card.description}
                  tag=""
                  views={10}
                  key={index}
                />
              ))
            : "Khong có gì hết"}
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

export const getStaticProps: GetStaticProps = async (context) => {
  let response = null;

  try {
    response = await PostService.getAll({});
  } catch (_) {}

  return {
    props: {
      posts: response?.data?.data ?? [],
    },
  };
};

(Home as PageWithLayoutType).Layout = ClientLayout;

export default Home;
