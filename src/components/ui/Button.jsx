import React from "react";

const Button = ({ children, onClick, action }) => {
  return (
    <button
      type="button"
      className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
