import Editor from "@monaco-editor/react";
import cookieCutter from "cookie-cutter";
import { useEffect } from "react";
import { useEditor } from "../context/AppContext";
import EditorTitle from "./EditorTitle";

export default function MonacoEditor({
  language,
  code,
  setCode,
  forPreview,
  editorOpen,
  setEditorOpen,
}) {
  const { theme, fontFamily, fontSize, wrap, showLineNumbers } = useEditor();

  const handleEditorChange = (value, e) => {
    console.log(value);
    setCode(value);
  };

  useEffect(() => {
    if (!forPreview) {
      cookieCutter.set(language, code);
    }
    // eslint-disable-next-line
  }, [code, language]);

  return (
    <div className="flex flex-col items-center flex-grow h-full">
      {!forPreview && (
        <EditorTitle
          language={language}
          editorOpen={editorOpen}
          setEditorOpen={setEditorOpen}
        />
      )}

      <Editor
        value={code}
        language={language}
        theme="vs-dark"
        width="100%"
        className="max-w-full"
        height="100%"
        options={{
          fontSize,
          fontFamily,
          wordWrap: wrap ? "on" : "off",
          "semanticHighlighting.enabled": "configuredByTheme",
          lineNumbers: showLineNumbers ? "on" : "off",
          minimap: { enabled: false },
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
}
