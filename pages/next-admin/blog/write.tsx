import React, { FC, ReactElement, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import ContainerNormal from "../../../components/Dumb/Wrap/ContainerNormal";
import {
  Button,
  ButtonGroup,
  FormControl,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import DrawerFileManager from "../../../components/Smart/DrawerFileManager/DrawerFileManager";
import Head from "next/head";

interface Props {}

const Write: FC<Props> = function ({}): ReactElement {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <ContainerNormal maxW="992px">
      <Head>
        <title>Manager writer - duongductrong06</title>
      </Head>

      <Stack direction="row" alignItems="center">
        <Text as="h1" fontSize="3xl">
          Editor
        </Text>

        <DrawerFileManager />
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

export default Write;
