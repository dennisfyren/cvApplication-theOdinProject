import React, { useState } from "react";

function Input({ label, id, type = "text", handleChange = null, value = "" }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={label}
        id={id}
        className="p-1 pl-2 bg-slate-50 w-60 rounded shadow-inner"
        onChange={(e) => {
          handleChange !== null ? handleChange(e, label, id) : null;
        }}
      ></input>
    </div>
  );
}

export default Input;
