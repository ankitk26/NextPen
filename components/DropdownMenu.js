const DropdownMenu = ({ isOpen, data, handleChange }) => {
  return (
    <ul
      className={`absolute w-full rounded z-50 pt-1 text-textSecondary ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {data.map(({ value, label }) => (
        <li
          key={value}
          className="block w-full px-4 py-2 text-sm text-left capitalize whitespace-no-wrap cursor-pointer bg-paper-secondary hover:bg-paper"
          onClick={() => handleChange(value)}
        >
          {label}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
