import {
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { RiSearchLine } from "react-icons/ri";

interface Props extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {}

const Search: FC<Props> = function ({ ...props }) {
  return (
    <FormControl id="search" mt={5}>
      <InputGroup>
        <Input
          {...props}
          type="text"
          size="lg"
          placeholder="Tìm kiếm bài viết mong muốn"
        />
        <InputRightElement mt={1} mr={1} children={<RiSearchLine fontSize={24} />} />

      </InputGroup>
      <FormHelperText>Có 120 kết quả được tìm kiếm.</FormHelperText>
    </FormControl>
  );
};

export default Search;
