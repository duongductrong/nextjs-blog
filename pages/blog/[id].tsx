import React, { FC } from "react";
import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

const markdown = `# Live demo

##### Changes are automatically rendered as you type.

* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no  is used! Yay!

## Table of Contents

## HTML block below
Pretty neat, eh?

## Tables?

| Feature   | Support |
| :-------: | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

<h1>123</h1>
`;

const Blog: FC = function ({}) {
  return (
    <Box maxW="800px" mx="auto">
      <Head>
        <title>
          Modern home in city center in the heart of historic Los Angeles -
          duongductrong06
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mt={10}>
        <Box fontSize="5xl" as="h1" fontWeight="bold">
          Modern home in city center in the heart of historic Los Angeles
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Stack direction="row" spacing={5}>
              <Avatar size="sm" src="https://bit.ly/kent-c-dodds" />
              <Text>duongductrong06</Text>
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
                  JavaScript &bull; ReactJS
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>

        <main style={{ marginTop: "3rem" }}>
          <ReactMarkdown children={markdown} escapeHtml={false} />
        </main>
      </Box>
    </Box>
  );
};

export default Blog;
