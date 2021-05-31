import { useEditor } from "../context/AppContext";
import styles from "../styles/FontSizeInput.module.css";

const FontSizeInput = () => {
  const { fontSize, setFontSize } = useEditor();

  // Change font size
  const fontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value));
  };

  // Decrease font size
  const decrement = () => {
    setFontSize((prev) => prev - 1);
  };

  // Increase font size
  const increment = () => {
    setFontSize((prev) => prev + 1);
  };

  return (
    <div className="flex justify-start w-full h-10 mt-1 bg-transparent border rounded-lg border-borderPrimary ">
      {/* Decrement button */}
      <button
        className="w-20 h-full text-white rounded-tl rounded-bl cursor-pointer focus:outline-none hover:bg-paper"
        type="button"
        onClick={decrement}
      >
        <span className="m-auto text-lg">−</span>
      </button>

      {/* Display font size number */}
      <input
        type="number"
        className={`w-full text-center text-white outline-none bg-paper-secondary text-md focus:outline-none ${styles.font_size_input}`}
        value={parseInt(fontSize)}
        onChange={fontSizeChange}
      />

      {/* Increment button */}
      <button
        type="button"
        className="w-20 h-full text-white rounded-tr rounded-br cursor-pointer focus:outline-none hover:bg-paper"
        onClick={increment}
      >
        <span className="m-auto text-lg">+</span>
      </button>
    </div>
  );
};

export default FontSizeInput;
