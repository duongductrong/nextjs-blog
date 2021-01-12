import React, { FC, ReactElement } from "react";
import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import MarkdownChakra from "../../components/Dumb/MarkdownChakra/MarkdownChakra";
import ContainerNormal from "../../components/Dumb/Container/ContainerNormal";
import ClientLayout from "../../components/Layout/ClientLayout/ClientLayout";
import PageWithLayoutType from "../../types/PageLayoutWithType";
import { GetServerSideProps } from "next";
import PostService from "../../core/services/PostService";
import { NextSeo } from "next-seo";

interface Post {
  title: string;
  description: string;
  content: string;
  tag: Tag;
  author: User;
  views: string | number;
  alias: string;
  draft: number;
  publish: number;
  postId: number;
}

interface Tag {
  name?: string;
  description?: string;
}
interface User {
  username?: string;
  name?: string;
}
interface Props {
  post: Post;
}

function Blog<T extends Props>({ post }: T) {
  return (
    <ContainerNormal>
      <NextSeo title={post.title} description={post.description} />

      <Box mt={10}>
        <Box fontSize="5xl" as="h1" fontWeight="bold">
          {post.title}
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <Avatar size="sm" src="" />
              <Text fontSize="md">{post.author.username}</Text>
            </Stack>
          </Box>
          <Box>
            <Box p={6} pl={0}>
              <Box d="flex" alignItems="baseline">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {Math.round(post.content.length / 1000)} min read &bull;{" "}
                  {post.views} views
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>

        <main style={{ marginTop: "2rem" }}>
          <MarkdownChakra>{post.content}</MarkdownChakra>
        </main>
      </Box>
    </ContainerNormal>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let postIdOrAlias: string = Array.isArray(params.id)
    ? params.id[0]
    : params.id;
  let post: any = null;

  // fetch api
  try {
    post = await PostService.getItem({
      aliasOrId: postIdOrAlias.split("_p_")[1],
    });
  } catch (e) {
    console.log(e);
  }

  // not found
  if (!post) {
    return {
      notFound: true,
    };
  }

  // response for client
  return {
    props: {
      post: post.data,
    },
  };
};

(Blog as PageWithLayoutType).Layout = ClientLayout;

export default Blog;
