import React from "react";

function Input({ label, type = "text", setGeneral, general }) {
  function handleChange(label, e) {
    setGeneral((obj) => ({
      ...obj,
      [label]: e.target.value,
    }));
  }

  return (
    <>
      <label>{label}</label>
      <input
        className="ml-2"
        onChange={(e) => {
          handleChange(label, e);
        }}
      ></input>
    </>
  );
}

export default Input;
