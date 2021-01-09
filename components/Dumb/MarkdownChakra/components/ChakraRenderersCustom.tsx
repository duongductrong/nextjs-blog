import { FC } from "react";
import {
  AspectRatio,
  Box,
  Code,
  Heading,
  Image,
  Link,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import SyntaxHighlighterCustom from "../../SyntaxHighlighter/SyntaxHighlighterCustom";

/**
 * Custom function component for MarkdownChakra - React Markdown
 */

const healingCustom: FC<{ level: string; node: any }> = function ({
  level,
  children,
  node,
}) {
  const healingLevel = {
    1: "4xl",
    2: "3xl",
    3: "2xl",
    4: "xl",
    5: "lg",
    6: "md",
  };

  const heading : string | any = `h${level}`;

  return (
    <Heading
      mb={5}
      as={heading}
      fontFamily="inherit"
      fontSize={healingLevel[level]}
      lineHeight={1.5}
    >
      {node.children.map((element) => element.value)}
    </Heading>
  );
};

const inlineCodeCustom: FC = function ({ children }) {
  return <Code colorScheme="yellow">{children}</Code>;
};

const paragraphCustom: FC = function ({ children }) {
  return (
    <Heading
      fontFamily="Inter"
      fontWeight="semiBold"
      lineHeight={1.5}
      my={2}
      as="p"
      fontSize="lg"
    >
      {children}
    </Heading>
  );
};

const listCustom: FC<{ ordered: Boolean }> = function ({
  children,
  ordered,
  ...props
}) {
  if (ordered) {
    return <OrderedList pl={5}>{children}</OrderedList>;
  } else {
    return <UnorderedList pl={5}>{children}</UnorderedList>;
  }
};

const blockquoteCustom: FC = function ({ children }) {
  return (
    <Box as="blockquote" borderLeftWidth={5} pl={4}>
      {children}
    </Box>
  );
};

const imageCustom: FC<{ src: string; alt: string }> = function ({
  children,
  src,
  alt,
  ...props
}) {
  return (
    <AspectRatio maxW="100%" w="500px">
      <Image src={src} alt={alt}></Image>
    </AspectRatio>
  );
};

const linkCustom: FC<{ href: string }> = function ({ children, href }) {
  return (
    <Link color="teal.300" href={href} isExternal>
      {children}
    </Link>
  );
};

// export it
export const ChakraRenderersCustom = {
  code: SyntaxHighlighterCustom,
  paragraph: paragraphCustom,
  blockquote: blockquoteCustom,
  img: imageCustom,
  list: listCustom,
  heading: healingCustom,
  inlineCode: inlineCodeCustom,
  link: linkCustom,
  // listItem: ({ children }) => <div></div>,
  // definition: ({ children }) => <div></div>,
  // linkReference: ({ children }) => <div></div>,
  // imageReference: ({ children }) => <div></div>,
  // text: ({ children }) => <div></div>,

  // delete: ({ children }) => <div></div>,
  // thematicBreak: ({ children }) => <div></div>,
  // emphasis: ({ children }) => <div></div>,
};
