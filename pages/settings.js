import { Switch } from "@material-ui/core";
import Dropdown from "../components/Dropdown";
import FontSizeInput from "../components/FontSizeInput";
import Layout from "../components/Layout";
import Preview from "../components/Preview";
import { fonts, themes } from "../constants/constants";
import { useEditor } from "../context/AppContext";

const Settings = () => {
  const {
    theme,
    fontFamily,
    wrap,
    setTheme,
    setWrap,
    setFontFamily,
    showLineNumbers,
    setShowLineNumbers,
  } = useEditor();

  const wrapChange = (e) => setWrap(e.target.checked);
  const lineNumbersChange = (e) => setShowLineNumbers(e.target.checked);

  return (
    <Layout
      title="Settings | Change editor preferences"
      content="Change editor settings and preferences"
    >
      <div className="grid w-full h-full grid-cols-2 p-8 mb-10 text-center bg-background">
        {/* Preview Section */}
        <Preview />

        {/* Settings menu */}
        <div className="mx-16 my-0 text-center">
          <h1 className="text-2xl text-white text-opacity-80">Settings</h1>

          <form className="grid items-center grid-cols-2 gap-6 mt-8 text-textSecondary">
            {/* Change theme of editor */}
            <span>Theme</span>
            <Dropdown data={themes} value={theme} handler={setTheme} />

            {/* Font family setting */}
            <span>Font Family</span>
            <Dropdown data={fonts} value={fontFamily} handler={setFontFamily} />

            {/* Font size setting */}
            <span>Font Size</span>
            <FontSizeInput />

            {/* Wrap content setting */}
            <span>Wrap Content</span>
            <Switch color="primary" checked={wrap} onChange={wrapChange} />

            {/* Showing line numbers setting */}
            <span>Line Numbers</span>
            <Switch
              checked={showLineNumbers}
              color="primary"
              onChange={lineNumbersChange}
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
