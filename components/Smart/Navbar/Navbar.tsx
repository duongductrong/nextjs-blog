import React from "react";
import {
  Box,
  BoxProps,
  Button,
  Flex,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { TiWeatherSunny, TiAdjustBrightness } from "react-icons/ti";
import Link from "next/link";
import routes from "../../../configs/routes";
import { useRouter } from "next/router";
import NavbarDrawer from "./components/NavbarDrawer";

interface Props extends Omit<BoxProps, "className"> {}

const Navbar: React.FC<Props> = function ({ ...props }) {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  // Color of header
  // const background: string = colorMode === "light" ? "white" : "gray.800";
  const background: string =
    colorMode === "light"
      ? "rgba(255, 255, 255, 0.9)"
      : "rgba(26, 32, 44, 0.9)";

  return (
    <Box
      {...props}
      position="sticky"
      top={0}
      left={0}
      px={0}
      py={6}
      mb={2}
      bgColor={background}
      zIndex={10}
    >
      <Flex
        maxW="992px"
        mx="auto"
        px={{ base: 5, xl: 0 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <TiAdjustBrightness />
            ) : (
              <TiWeatherSunny />
            )}
          </Button>
        </Box>
        <Stack direction={["row"]} spacing={3} display={{base: "none", sm: "block"}}>
          <Link href={routes.blog}>
            <Button bg={background} fontWeight="semiBold" fontSize="lg">
              Blog
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button bg={background} fontWeight="semiBold" fontSize="lg">
              About
            </Button>
          </Link>
          <Link href="/project">
            <Button bg={background} fontWeight="semiBold" fontSize="lg">
              Projects
            </Button>
          </Link>
          <Link href="/admin/blog/create">
            <Button fontWeight="semiBold" variant="outline" fontSize="lg">
              Create
            </Button>
          </Link>
        </Stack>

        <NavbarDrawer display={{base: "block", sm: "none"}} />
      </Flex>
    </Box>
  );
};

export default Navbar;
