import React from "react";

const Button = ({ children, onClick, action }) => {
  return (
    <button
      type="button"
      className="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors dark:bg-neutral-800 dark:hover:bg-neutral-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
