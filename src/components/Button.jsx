import React from "react";

function Button({ label, className = "", handleClick }) {
  return (
    <button
      className={`${className} text-white w-20 h-8 shadow mt-5 rounded-xl`}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {label}
    </button>
  );
}

export default Button;
