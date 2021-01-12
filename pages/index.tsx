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
          Blog
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
            ? posts.map((post, index) => (
                <Card
                  title={post.title}
                  link={`/blog/${post.alias}`}
                  description={post.description}
                  tag={post.tag.name}
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

export const getStaticProps: GetStaticProps = async () => {
  let response = null;

  try {
    // try get data from api
    response = await PostService.getAll({});
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      posts: response?.data ?? [],
    },
  };
};

(Home as PageWithLayoutType).Layout = ClientLayout;

export default Home;
