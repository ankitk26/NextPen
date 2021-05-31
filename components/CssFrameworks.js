import { useEditor } from "../context/AppContext";

const CssFrameworks = () => {
  const { cssFramework, setCssFramework } = useEditor();

  const handleChange = (e) => {
    console.log(e.target.value);
    setCssFramework(e.target.value);
  };

  return (
    <div className="p-3 border-l-4 bg-paper-secondary border-borderPrimary">
      <h3 className="text-lg">Add CSS frameworks</h3>
      <p className="text-sm text-textSecondary">
        Add any one of the given CSS frameworks in your project
      </p>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="css_fw"
            id="none"
            value="none"
            checked={cssFramework === "none"}
            onChange={handleChange}
          />
          <label htmlFor="bootstrap">None</label>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="css_fw"
            id="bootstrap"
            value="bootstrap"
            checked={cssFramework === "bootstrap"}
            onChange={handleChange}
          />
          <label htmlFor="bootstrap">Bootstrap</label>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="css_fw"
            id="tailwind"
            value="tailwind"
            checked={cssFramework === "tailwind"}
            onChange={handleChange}
          />
          <label htmlFor="tailwind">TailwindCSS</label>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="css_fw"
            id="bulma"
            value="bulma"
            checked={cssFramework === "bulma"}
            onChange={handleChange}
          />
          <label htmlFor="bulma">Bulma</label>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="css_fw"
            id="materialize"
            value="materialize"
            checked={cssFramework === "materialize"}
            onChange={handleChange}
          />
          <label htmlFor="materialize">Materialize</label>
        </div>
      </div>
    </div>
  );
};

export default CssFrameworks;
