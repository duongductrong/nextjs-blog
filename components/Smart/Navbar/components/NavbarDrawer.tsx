import React, { FC, ReactElement } from "react";
import {
  Button,
  ButtonProps,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars, FaGrav } from "react-icons/fa";

interface Props extends ButtonProps {}

const NavbarDrawer: FC<Props> = function ({ ...props }): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        {...props}
        ref={btnRef}
        colorScheme="gray"
        size="md"
        onClick={onOpen}
      >
        <FaBars />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <FaGrav />
            </DrawerHeader>

            <DrawerBody>
              <List>
                <ListItem mb={3}>
                  <Button colorScheme="gray" w="100%">
                    Home
                  </Button>
                </ListItem>
                <ListItem mb={3}>
                  <Button colorScheme="gray" w="100%">
                    About
                  </Button>
                </ListItem>

                <ListItem mb={3}>
                  <Button colorScheme="gray" w="100%">
                    Project
                  </Button>
                </ListItem>

                <ListItem mb={3}>
                  <Button variant="outline" colorScheme="gray" w="100%">
                    Create
                  </Button>
                </ListItem>
              </List>
            </DrawerBody>

          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
