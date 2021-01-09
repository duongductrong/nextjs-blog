import React from "react";
import { Box, Button, Flex, Stack, useColorMode } from "@chakra-ui/react";
import { TiWeatherSunny, TiAdjustBrightness } from "react-icons/ti";
import Link from "next/link";
import routes from "../../../../configs/routes";

interface Props extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {}

const Navbar: React.FC<Props> = function ({ ...props }) {
  const { colorMode, toggleColorMode } = useColorMode();

  // Color of header
  // const background: string = colorMode === "light" ? "white" : "gray.800";
  const background: string = colorMode === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(26, 32, 44, 0.9)";

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
        <Stack direction={["row"]} spacing={3}>
          <Button bg={background} fontWeight="semiBold" fontSize="lg">
            <Link href={routes.blog}>Blog</Link>
          </Button>
          <Button bg={background} fontWeight="semiBold" fontSize="lg">
            <Link href="/[path]" as={routes.talk}>
              Tâm sự
            </Link>
          </Button>
          <Button bg={background} fontWeight="semiBold" fontSize="lg">
            <Link href="/[path]" as={routes.projects}>
              Dự án nhỏ đã làm
            </Link>
          </Button>
          <Button bg={background} fontWeight="semiBold" fontSize="lg">
            <Link href="/[path]" as={routes.about}>
              Về tôi
            </Link>
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
