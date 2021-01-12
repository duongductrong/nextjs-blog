import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { FC, ReactElement } from "react";
import Footer from "../../Smart/Footer/Footer";
import { HiPencilAlt, HiHome } from "react-icons/hi";
import { TiWeatherSunny, TiAdjustBrightness } from "react-icons/ti";
import DrawerFileManager from "../../../components/Smart/DrawerFileManager/DrawerFileManager";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

interface Props {}

const AdminLayout: FC<Props> = function ({ children }): ReactElement {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const onBackHome = () => router.push("/");

  return (
    <>
      <NextSeo noindex={true} />
      <Box>
        <Box
          height="60px"
          w="100%"
          bg={colorMode === "light" ? "gray.50" : "gray.900"}
          mb={5}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          px={5}
        >
          <Button onClick={onBackHome} mr={3}>
            <HiHome />
          </Button>

          <DrawerFileManager mr={3} />

          <Button mr={3}>
            <HiPencilAlt />
          </Button>

          <Box mr={3}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <TiAdjustBrightness />
              ) : (
                <TiWeatherSunny />
              )}
            </Button>
          </Box>
          <Menu>
            <MenuButton as={Button} w="180px">
              <Stack direction="row" spacing={3} alignItems="center">
                <Avatar size="xs" src="" />
                <Text fontSize="sm">duongductrong06</Text>
              </Stack>
            </MenuButton>
            <MenuList>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export default AdminLayout;
