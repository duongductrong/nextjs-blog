import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import ClientLayout from "../../components/Layout/ClientLayout/ClientLayout";
import AuthService from "../../core/services/AuthService";
import PageWithLayoutType from "../../types/PageLayoutWithType";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
interface Props {
  authenticateFail: boolean;
}

const Login: FC<Props> = function ({ authenticateFail }) {
  const router = useRouter();
  const toast = useToast();
  const { register, watch, handleSubmit, errors, setError } = useForm();
  const [show, setShow] = React.useState<Boolean>(false);
  const handleClick = () => setShow(!show);

  const formLogin = (data) => {
    if (Object.keys(errors).length !== 0) return;

    AuthService.login(data)
      .then((response) => {
        toast({
          title: response?.message,
          description: `Login successfully`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        router.push("/");
      })
      .catch((error) => {
        const { response } = error;
        toast({
          title: response?.data?.message,
          description: `${response?.data?.error?.username ?? ""} ${
            response?.data?.error?.password ?? ""
          }`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    if (!authenticateFail) {
      router.push("/");
    }
  }, []);

  return (
    <Box mt={10} maxW="400px" p={10} mx="auto" borderRadius={5}>
      <Head>
        <title>Trang đăng nhập</title>
      </Head>

      <Heading as="h1" textAlign="center" fontSize="4xl">
        Next Login
      </Heading>

      <form onSubmit={handleSubmit(formLogin)}>
        <VStack spacing={5} mt={10}>
          <FormControl isInvalid={errors?.username}>
            <Input
              type="text"
              name="username"
              placeholder="Enter your username"
              ref={register({ required: true })}
            />
            {errors?.username && (
              <FormHelperText color="red.700">
                Trường này bắt buộc nhập
              </FormHelperText>
            )}
          </FormControl>

          <FormControl isInvalid={errors?.password}>
            <InputGroup size="md">
              <Input
                name="password"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                ref={register({ required: true, minLength: 8 })}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors?.password && (
              <FormHelperText color="red.700">
                Trường này bắt buộc nhập
              </FormHelperText>
            )}
          </FormControl>

          <Text fontSize="sm">
            <Link href="/auth/forget">Quên mật khẩu ?</Link>
          </Text>
        </VStack>

        <Button colorScheme="gray" mt={5} width="100%" type="submit">
          Đăng nhập ngay
        </Button>
      </form>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const checkMe = await AuthService.me({
    context: "server",
    contextServerNextJs: context,
  });

  return {
    props: {
      authenticateFail: !checkMe,
    },
  };
};

(Login as PageWithLayoutType).Layout = ClientLayout;

export default Login;
