import React, { FC, ReactElement } from "react";
import {
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  List,
  ListItem,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

interface Props {}

const DrawerFileManager: FC<Props> = function ({ ...props }): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="gray" size="sm" onClick={onOpen}>
        <FaBars />
      </Button>
      <Drawer
        {...props}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Files Manager</DrawerHeader>

            <DrawerBody>
              <List>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1,1,1,1,1,1,11,1,1].map((_) => (
                  <ListItem mb={3}>
                    <Stack direction="row">
                      <Button flex="2" colorScheme="gray">
                        Ảnh {_}
                      </Button>{" "}
                      <CloseButton flex="1" size="lg" />
                    </Stack>
                  </ListItem>
                ))}
              </List>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default DrawerFileManager;
