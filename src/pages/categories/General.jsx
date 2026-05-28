import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

function General({ addData }) {
  const [general, setGeneral] = useState({});

  function handleClick(e) {
    addData(general);
  }

  function handleChange(e, label, id) {
    const category = "General";
    setGeneral({
      ...general,
      [category]: {
        type: "single",
        data: [
          {
            ...(general[category]?.data?.[0] || {}),
            [label]: { value: e.target.value, id: id },
          },
        ],
      },
    });
  }

  return (
    <div className="flex flex-col p-4 rounded-lg bg-slate-200 w-[40%] shadow-xl">
      <h1 className="font-semibold text-2xl mb-3">General</h1>
      <div className="grid grid-cols-2 gap-2">
        <Input label={"First name"} id={"fname"} handleChange={handleChange} />
        <Input label={"Last name"} id={"lname"} handleChange={handleChange} />
        <Input
          label={"Email"}
          id={"email"}
          type={"email"}
          handleChange={handleChange}
        />
        <Input
          label={"Phone"}
          id={"phone"}
          type={"tel"}
          handleChange={handleChange}
        />
      </div>
      <Button
        label={"Save"}
        className={"bg-green-400 hover:bg-green-500 self-end"}
        handleClick={handleClick}
      />
    </div>
  );
}

export default General;
