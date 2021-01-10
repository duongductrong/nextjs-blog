import { Badge, Box, Image } from "@chakra-ui/react";
import Link from "next/link";

interface Props extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {}

const Card: React.FC<Props> = function ({ ...props }) {
  const property = {
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box
      w="100%"
      maxW={{ base: "100%" }}
      borderBottomWidth="1px"
      overflow="hidden"
    >
      <Box p={6} pl={0}>
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="red">
            Bài viết mới
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
          JavaScript &bull; ReactJS
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h1"
          lineHeight="tight"
          isTruncated
          fontSize="2xl"
        >
          <Link href="/blog/new-post">{property.title}</Link>
        </Box>

        <Box mt={1} as="p" fontSize="md">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups
        </Box>

        <Box as="span" mr="2" color="gray.600" fontSize="sm">
          {property.reviewCount} View
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
