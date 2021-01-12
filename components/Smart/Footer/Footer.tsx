import { Box, Button, Divider, Stack, Text } from "@chakra-ui/react";
import React, { FC, ReactElement } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: FC = function ({}): ReactElement {
  return (
    <Box p={5}>
      <Text textAlign="center" fontSize="lg" as="h1" mb={5}>
        Website without visitors is like a ship lost in the horizon
      </Text>
      <Stack justifyContent="center" direction="row">
        <Button>
          <FaFacebook />
        </Button>
        <Button>
          <FaInstagram />
        </Button>
        <Button>
          <FaLinkedinIn />
        </Button>
      </Stack>
    </Box>
  );
};

export default Footer;
