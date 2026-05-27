import React from "react";

function Button({ label, className = "", temp, handleClick }) {
  return (
    <button
      className={`${className} text-white w-20 h-8 shadow mt-5 rounded-xl`}
      onClick={() => {
        handleClick(temp);
      }}
    >
      {label}
    </button>
  );
}

export default Button;
