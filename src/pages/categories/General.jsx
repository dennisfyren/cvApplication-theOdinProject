import React from "react";
import Input from "../../components/Input";

function General({ setGeneral, general }) {
  return (
    <div className="border p-2">
      <h1>General</h1>
      <Input label={"First name:"} setGeneral={setGeneral} general={general} />
      <Input label={"Last name:"} setGeneral={setGeneral} />
      <Input label={"Email:"} setGeneral={setGeneral} />
      <Input label={"Phone:"} setGeneral={setGeneral} />
    </div>
  );
}

export default General;
