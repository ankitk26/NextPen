import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";

const Dropdown = ({ data, value, handler }) => {
  const [isOpen, setIsOpen] = useState(false);

  const container = useRef(null);

  // Close dropdown when clicked outside the dropdown
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (container.current) {
        if (!container.current.contains(e.target)) {
          if (!isOpen) return;
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen, container]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (value) => {
    handler(value);
    setIsOpen(false);
  };

  const getValue = () => value.split("_").join(" ");

  return (
    <div ref={container} className="relative inline-block">
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-sm text-white rounded-sm focus:outline-none bg-paper-secondary"
        type="button"
        onClick={handleOpen}
      >
        <span className="mr-1 text-sm capitalize">{getValue()}</span>
        <ExpandMoreIcon />
      </button>

      <DropdownMenu data={data} handleChange={handleChange} isOpen={isOpen} />
    </div>
  );
};

export default Dropdown;
