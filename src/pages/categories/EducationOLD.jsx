import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Education({ addData }) {
  const [education, setEducation] = useState({});
  const [schools, setSchools] = useState({});
  const [temp, setTemp] = useState({ id: crypto.randomUUID() });

  function handleChange(e, label, id) {
    setTemp({ ...temp, [label]: { value: e.target.value, id: id } });
  }

  // figure out a better way to handle multiple items.

  function handleClick(obj) {
    const { id, ...rest } = obj;
    const category = "Education";
    setSchools({
      ...schools,
      [category]: {
        type: "multi",
        data: { ...(schools[category]?.data || {}), [id]: { ...rest } },
      },
    });
    setTemp({ id: crypto.randomUUID() });
  }

  function handleData() {
    addData(schools);
  }

  return (
    <div>
      <div className="flex p-4 rounded-lg bg-slate-200 w-[40%] shadow-xl">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-2xl mb-3">Education</h1>
          <Input
            label={"School Name"}
            id={"school"}
            handleChange={handleChange}
          />
          <Input label={"Degree"} id={"degree"} handleChange={handleChange} />
          <Input
            label={"Year start"}
            id={"yearStart"}
            handleChange={handleChange}
          />
          <Input
            label={"Year end"}
            id={"yearEnd"}
            handleChange={handleChange}
          />
          <Button
            label={"Add"}
            className="bg-blue-400 hover:bg-blue-500"
            temp={temp}
            handleClick={handleClick}
          />
        </div>
        <div className="flex w-full">
          <div>
            <ul></ul>
          </div>
          <Button
            label={"Save"}
            className="bg-green-400 hover:bg-green-500 ml-auto self-end"
            handleClick={handleData}
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
