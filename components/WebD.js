import { makeStyles } from "@material-ui/core";
import cookieCutter from "cookie-cutter";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useEditor } from "../context/AppContext";
import { getCssFrameworkLink } from "../utils/getCssFrameworkLink";
// import MonacoEditor from "./MonacoEditor";
// import Editor from "./Editor";

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const useStyles = makeStyles(() => ({
  rightAlign: {
    gridTemplateColumns: "2fr 3fr",
  },
  leftAlign: {
    gridTemplateColumns: "2fr 3fr",
    direction: "rtl",
  },
}));

const WebD = () => {
  const classes = useStyles();

  const [html, setHtml] = useState(cookieCutter.get("html") || "");
  const [css, setCss] = useState(cookieCutter.get("css") || "");
  const [js, setJs] = useState(cookieCutter.get("javascript") || "");

  const [srcDoc, setSrcDoc] = useState("");

  const [htmlOpen, setHtmlOpen] = useState(true);
  const [cssOpen, setCssOpen] = useState(true);
  const [jsOpen, setJsOpen] = useState(true);

  const { alignment, headTags, cssFramework } = useEditor();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
        <head>
        ${headTags}
        ${cssFramework === "none" ? "" : getCssFrameworkLink(cssFramework)}
        <style>${css}</style>
        </head>
        <body>
        ${html}
        <script>
        ${js}
        </script>
        </body>
        </html>
        `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js, headTags, cssFramework]);

  const container = (alignment) => {
    if (alignment === "right") {
      return classes.rightAlign;
    }
    if (alignment === "left") {
      return classes.leftAlign;
    }
  };

  const editorOpenStyle = (isOpen) => {
    return isOpen ? (alignment === "bottom" ? "w-full" : "h-full") : "";
  };

  return (
    <div className={`grid h-full bg-white mx-auto  ${container(alignment)}`}>
      {/* Adjust orientation of editors */}
      <div
        className={`flex bg-background p-1 pr-3 gap-4 ${
          alignment === "bottom" ? "flex-row" : "flex-col"
        }`}
      >
        {/* HTML Editor */}
        <div className={editorOpenStyle(htmlOpen)}>
          <Editor
            language="html"
            code={html}
            setCode={setHtml}
            editorOpen={htmlOpen}
            setEditorOpen={setHtmlOpen}
          />
        </div>

        {/* CSS Editor */}
        <div className={editorOpenStyle(cssOpen)}>
          <Editor
            language="css"
            code={css}
            setCode={setCss}
            editorOpen={cssOpen}
            setEditorOpen={setCssOpen}
          />
        </div>

        {/* JS Editor */}
        <div className={editorOpenStyle(jsOpen)}>
          <Editor
            language="javascript"
            code={js}
            setCode={setJs}
            editorOpen={jsOpen}
            setEditorOpen={setJsOpen}
          />
        </div>
      </div>

      {/* Output section */}
      <div>
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          className="h-full"
          width="100%"
          srcDoc={srcDoc}
        />
      </div>
    </div>
  );
};

export default WebD;
