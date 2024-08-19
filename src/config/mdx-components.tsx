import type { MDXComponents } from "mdx/types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("javascript", javascript);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: ({ className, children, ...props }) => {
      const hasLang = /language-(\w+)/.exec(className || "");
      return hasLang ? (
        <SyntaxHighlighter
          style={oneDark}
          language={hasLang[1]}
          PreTag="div"
          showLineNumbers={true}
          useInlineStyles={true}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props} />
      );
    },
    h1: ({ children }) => <h1>{children}</h1>,
    // eslint-disable-next-line @next/next/no-img-element
    img: (props) => <img alt="entah" {...props} />,
    // Img: ({ width, height, onClick, ...props }: ImageProps) => {
    //   return (
    //     // eslint-disable-next-line jsx-a11y/alt-text
    //     <Image
    //       width={typeof width === "number" ? width : 0}
    //       height={typeof height === "number" ? width : 0}
    //       {...(props as ImageProps)}
    //     />
    //   );
    // },
    ...components,
  };
}
