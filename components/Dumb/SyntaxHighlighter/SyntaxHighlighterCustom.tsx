import { Box } from "@chakra-ui/react";
import { FC } from "react";
import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";

interface Props extends SyntaxHighlighterProps {
  language: string;
  value: string;
}

const SyntaxHighlighterCustom: FC<Props> = ({ language, value, ...props }) => {
  return (
    <Box mb={5}>
      <SyntaxHighlighter {...props} language={language ?? ""}>
        {value ?? ""}
      </SyntaxHighlighter>
    </Box>
  );
};

export default SyntaxHighlighterCustom;
