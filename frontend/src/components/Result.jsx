import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vscDarkPlus} from "react-syntax-highlighter/dist/esm/styles/prism";
import '../styles/Result.scss'

const Result = ({feedback}) => {

  const content = feedback ? <div><h2>Analysis Result:</h2> <ReactMarkdown
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? (
          <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div" {...props}>
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
    }}
  >
    {feedback}
  </ReactMarkdown>
  </div> : <div className="result__placeholder">Your code analysis will show here!</div>
  return (
    <div className="result">
      {content}

    </div>
  );
};

export default Result;
