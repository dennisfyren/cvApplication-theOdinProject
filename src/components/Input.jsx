import React from "react";

function Input({ label, id, type = "text", handleChange }) {
  return (
    <div>
      {/* <label htmlFor={id} className="inline-block w-20">
        {label}
      </label> */}
      <input
        placeholder={label}
        id={id}
        className="p-1 pl-2 bg-slate-50 w-60 rounded shadow-inner"
        onChange={(e) => {
          handleChange(e, label);
        }}
      ></input>
    </div>
  );
}

export default Input;
