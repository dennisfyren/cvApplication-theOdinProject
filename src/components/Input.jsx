import React, { useState } from "react";

function Input({ label, id, type = "text", handleChange }) {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        placeholder={label}
        id={id}
        className="p-1 pl-2 bg-slate-50 w-60 rounded shadow-inner"
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(e, label, id);
        }}
      ></input>
    </div>
  );
}

export default Input;
