import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function useMDXComponents(components) {
  return {
    // Headings
    h1: ({ children }) => (
      <h1 className="font-extrabold text-4xl mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-bold text-3xl mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-semibold text-2xl mt-8">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-semibold text-xl mt-8">{children}</h4>
    ),

    // Paragraph
    p: ({ children }) => <p className="font-regular text-md">{children}</p>,

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),

    code: ({ children, className }) => {
      // If there's a language class (e.g., language-js), treat as block code
      if (className) {
        const language = className.replace(/language-/, "");
        return (
          <div className="w-screen flex justify-start">
            <div className="my-4 w-full max-w-screen-lg">
              <div className="w-auto">
                <SyntaxHighlighter
                  language={language}
                  style={oneDark}
                  customStyle={{ width: "100%" }}
                  showLineNumbers
                >
                  {children}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        );
      }

      // Otherwise, treat as inline code
      return (
        <code className="bg-[#282C34] rounded px-1 py-0.5">{children}</code>
      );
    },

    // Unordered list and list item
    ul: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
    li: ({ children }) => <li className="mb-2">{children}</li>,

    // Ordered list
    ol: ({ children }) => (
      <ol className="list-decimal pl-5 mb-4">{children}</ol>
    ),

    // Table elements
    table: ({ children }) => (
      <table className="table-auto border-collapse border border-gray-300 mb-4">
        {children}
      </table>
    ),
    th: ({ children }) => (
      <th className="border border-gray-300 px-4 py-2">{children}</th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-300 px-4 py-2">{children}</td>
    ),

    // Image
    img: ({ alt, src }) => <Image alt={alt} src={src} className="my-4" />,

    // Horizontal rule
    hr: () => <hr className="my-8" />,

    // Spread any additional components
    ...components,
  };
}
