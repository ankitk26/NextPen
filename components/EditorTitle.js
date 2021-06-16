import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useEditor } from "../context/AppContext";

const EditorTitle = ({ language, editorOpen, setEditorOpen }) => {
  const { alignment } = useEditor();

  // Toggle closing and opening the editor (only for webd)
  const toggleEditor = () => {
    console.log("changed");
    setEditorOpen((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between w-full px-4 py-2 bg-paper-secondary">
      {/* Adjust title according to alignment and language */}
      <h2
        className={`text-white uppercase ${
          alignment === "bottom" && "text-left"
        } `}
      >
        {language === "cpp" ? "C++" : language === "c" ? "C" : language}
      </h2>

      {/* Display toggle icon only for webd titles */}
      {(language === "html" ||
        language === "css" ||
        language === "javascript") && (
        <button
          className="flex items-center justify-center bg-transparent border-0 pointer focus:outline-none"
          onClick={() => toggleEditor()}
        >
          {editorOpen ? (
            <RemoveIcon className="text-gray-200" />
          ) : (
            <AddIcon className="text-gray-200" />
          )}
        </button>
      )}
    </header>
  );
};

export default EditorTitle;
