import { Box, ContainerProps } from "@chakra-ui/react";
import React, { FC, ReactElement } from "react";

interface Props extends Omit<ContainerProps, "className"> {}

const ContainerNormal: FC<Props> = function ({
  children,
  ...props
}): ReactElement {
  return (
    <Box maxW="800px" {...props} mx="auto" px={{ base: 5, lg: 0 }}>
      {children}
    </Box>
  );
};

export default ContainerNormal;
