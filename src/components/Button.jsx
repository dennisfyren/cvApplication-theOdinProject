import React from "react";

function Button({ label, className = "", id, handleClick }) {
  return (
    <button
      className={`${className} text-white w-20 h-8 shadow rounded-xl`}
      onClick={() => {
        handleClick(id);
      }}
    >
      {label}
    </button>
  );
}

export default Button;
