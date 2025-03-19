"use client";

import { useState, useRef, useEffect } from "react";

const renderTextWithLinks = (text) => {
  const urlRegex = /(https?:\/\/(?:www\.)?[^\s]+)/g;
  return text.split(urlRegex).map((part, index) => {
    if (urlRegex.test(part)) {
      const displayText = part.replace(/https?:\/\/(?:www\.)?/, "");
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          {displayText}
        </a>
      );
    }
    return part;
  });
};

const Terminal = ({ initialStatements = [] }) => {
  const [statements, setStatements] = useState(initialStatements);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  // Focus the input on mount without scrolling the page
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (input.trim().toLowerCase() === "clear") {
      setStatements([]);
    } else {
      const newStatement = { input, return: `${input}` };
      setStatements([...statements, newStatement]);
    }
    setInput("");
  };

  return (
    <div className="shadow-2xl sm:w-full max-w-screen-lg mx-10 w-9/10 lg:mx-auto mt-20 font-mono z-1">
      <div
        id="terminal-highlight"
        className="rounded-t-lg h-7 flex items-end px-3 space-x-2"
      >
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <div
        id="terminal-highlight"
        className="p-4 rounded-b-lg shadow-lg min-h-[200px]"
      >
        {statements.map((statement, index) => (
          <div key={index} className="mb-6">
            <div id="terminal-highlight-prompt">&gt; {statement.input}</div>
            <div id="terminal-highlight-generic">
              {Array.isArray(statement.return)
                ? statement.return.map((item, idx) => (
                    <div key={idx}>
                      {typeof item === "string"
                        ? renderTextWithLinks(item)
                        : item}
                    </div>
                  ))
                : typeof statement.return === "string"
                  ? renderTextWithLinks(statement.return)
                  : statement.return}
            </div>
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-green-400">&gt;&nbsp;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none focus:outline-none text-white w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
