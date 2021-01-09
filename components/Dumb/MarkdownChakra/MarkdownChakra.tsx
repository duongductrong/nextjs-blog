import React, { FC } from "react";
import ReactMarkdown, { ReactMarkdownPropsBase } from "react-markdown";
import gfm from "remark-gfm";
import { ChakraRenderersCustom } from "./components/ChakraRenderersCustom";

interface Props extends Omit<ReactMarkdownPropsBase, "className"> {
  children: any;
  plugins?: any[];
}

const MarkdownChakra: FC<Props> = function ({ children, plugins, ...props }) {
  return (
    <ReactMarkdown
      {...props}
      renderers={ChakraRenderersCustom}
      plugins={[gfm, ...plugins]}
      children={children}
      escapeHtml={false}
    />
  );
};

MarkdownChakra.defaultProps = {
  plugins: [],
};

export default MarkdownChakra;
