import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Education({ addData }) {
  const [education, setEducation] = useState({});
  const [schools, setSchools] = useState([]);

  function handleClick(e) {
    console.log(schools);
  }

  function handleChange(e, label) {
    const category = "Education";
    setSchools({
      ...schools,
      [category]: [
        { ...(schools[category]?.[0] || {}), [label]: e.target.value },
      ],
    });
  }

  return (
    <div className="flex p-4 rounded-lg bg-slate-200 w-[40%] shadow-xl">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl mb-3">Education</h1>
        <Input
          label={"School Name"}
          id={"school"}
          handleChange={handleChange}
        />
        <Input label={"Degree"} id={"degree"} handleChange={handleChange} />
        <Input label={"Year"} id={"year"} handleChange={handleChange} />

        <Button
          label={"Add"}
          className="bg-blue-400 hover:bg-blue-500"
          handleClick={handleClick}
        />
      </div>
      <Button
        label={"Save"}
        className="bg-green-400 hover:bg-green-500 ml-auto self-end"
        handleClick={handleClick}
      />
    </div>
  );
}

export default Education;
