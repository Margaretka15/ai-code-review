import {useState} from "react";
import CodeEditor from "./components/CodeEditor";
import Result from "./components/Result";
import {analyzeCode} from "./api/api";
import './App.scss';
import {Header} from "./components/Header";

function App() {
  const [code, setCode] = useState("// Write your JavaScript or TypeScript code here...");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!code.trim()) return; ///TODO: figure out how to do it with the placeholder here!
    setLoading(true);
    setFeedback("");

    const result = await analyzeCode(code);
    setFeedback(result);
    setLoading(false);
  };

  return (
    <div>
      <Header/>
      <div className="container">
        <CodeEditor code={code} setCode={setCode} onClick={handleSubmit} loading={loading}/>

        <Result feedback={feedback}/>
      </div>
    </div>
  );
}

export default App;
