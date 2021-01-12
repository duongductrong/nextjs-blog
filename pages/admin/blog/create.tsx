import React, { FC, ReactElement, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import ContainerNormal from "../../../components/Dumb/Container/ContainerNormal";
import {
  Button,
  ButtonGroup,
  FormControl,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import AdminLayout from "../../../components/Layout/AdminLayout/AdminLayout";
import PageWithLayoutType from "../../../types/PageLayoutWithType";
import { NextSeo } from "next-seo";

interface Props {}

const CreateBlog: FC<Props> = function ({}): ReactElement {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <ContainerNormal maxW="992px">
      <Head>
        <title>Create new blog - duongductrong06</title>
      </Head>

      <Stack direction="row" alignItems="center">
        <Text as="h1" fontSize="3xl">
          Editor
        </Text>
      </Stack>

      <form>
        <MDEditor height={500} value={value} onChange={setValue} />

        <Stack mt={3} direction={["row"]} alignItems="center">
          <ButtonGroup alignItems="center">
            <Button colorScheme="blue">Đăng bài</Button>
            <Button colorScheme="gray">Lưu nháp</Button>
          </ButtonGroup>

          <FormControl>
            <InputGroup>
              <Input type="url" placeholder="Thêm ảnh" mr={2} />
              <Button
                isLoading
                loadingText="Uploading"
                colorScheme="teal"
                variant="outline"
              >
                Upload
              </Button>
            </InputGroup>
          </FormControl>
        </Stack>
      </form>
    </ContainerNormal>
  );
};

(CreateBlog as PageWithLayoutType).Layout = AdminLayout;

export default CreateBlog;
