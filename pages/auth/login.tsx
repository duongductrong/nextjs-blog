import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React, { FC } from "react";

const Login: FC = function () {
  const [show, setShow] = React.useState<Boolean>(false);
  const handleClick = () => setShow(!show);

  return (
    <Box mt={10} maxW="400px" p={10} mx="auto" borderRadius={5}>
      <Head>
        <title>Trang đăng nhập</title>
      </Head>

      <Heading as="h1" textAlign="center" fontSize="4xl">
        Next Login
      </Heading>

      <form>
        <VStack spacing={5} mt={10}>
          <FormControl>
            <Input type="text" placeholder="Enter your username" />
          </FormControl>

          <FormControl>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Text fontSize="sm">
            <Link href="/auth/forget">Quên mật khẩu ?</Link>
          </Text>
        </VStack>

        <Button colorScheme="gray" mt={5} width="100%">
          Đăng nhập ngay
        </Button>
      </form>
    </Box>
  );
};

export default Login;
