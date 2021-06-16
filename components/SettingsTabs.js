import { useEditor } from "../context/AppContext";

const SettingsTabs = ({ openTab, setOpenTab }) => {
  const { language } = useEditor();

  return (
    <ul className="flex flex-col gap-2">
      {/* Display html and css settings only for webd */}
      {language === "webd" && (
        <>
          <li
            className={`${
              openTab === 1
                ? "border-primary border-l-2 bg-paper-secondary"
                : ""
            } p-1 pl-3 cursor-pointer hover:bg-paper-secondary`}
            onClick={() => setOpenTab(1)}
          >
            HTML
          </li>
          <li
            className={`${
              openTab === 2
                ? "border-primary border-l-2 bg-paper-secondary"
                : ""
            } p-1 pl-3 cursor-pointer hover:bg-paper-secondary`}
            onClick={() => setOpenTab(2)}
          >
            CSS
          </li>
        </>
      )}
      <li
        className={`${
          openTab === 3 ? "border-primary border-l-2 bg-paper-secondary" : ""
        } p-1 pl-3 mt-5 cursor-pointer hover:bg-paper-secondary`}
        onClick={() => setOpenTab(3)}
      >
        Editor
      </li>
    </ul>
  );
};

export default SettingsTabs;
