import Editor from "@monaco-editor/react";
import '../styles/CodeEditor.scss'
const CodeEditor = ({code, setCode, onClick, loading}) => {
  return (
    <div className="code-editor">
      <Editor
      height="60vh"
      width="100%"
      defaultLanguage="javascript"
      value={code}
      onChange={(newCode) => setCode(newCode)}
      theme="vs-dark"
      options={{
        fontSize: 14,
        minimap: {enabled: false},
        automaticLayout: true,
      }}
    />

      <button onClick={onClick} disabled={loading} style={{marginTop: "10px"}}>
        {loading ? "Analyzing..." : "Submit"}
      </button>
    </div>
  );
};

export default CodeEditor;
