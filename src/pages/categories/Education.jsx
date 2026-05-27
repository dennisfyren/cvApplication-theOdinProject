import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Education({ addData }) {
  const [education, setEducation] = useState({});
  const [schools, setSchools] = useState([]);
  const [temp, setTemp] = useState([]);

  function handleChange(e, label, id) {
    setTemp({ ...temp, [label]: { value: e.target.value, id: id } });
  }

  function handleClick(obj) {
    const category = "Education";
    const id = crypto.randomUUID();
    const name = Object.entries(obj)[0][1].value;
    setSchools({ ...schools, [category]: [{ ...schools, [id]: obj }] });
  }

  // function handleChange(e, label, id) {
  //   const category = "General";
  //   setGeneral({
  //     ...general,
  //     [category]: [
  //       {
  //         ...(general[category]?.[0] || {}),
  //         [label]: { value: e.target.value, id: id },
  //       },
  //     ],
  //   });
  // }

  function handleData() {
    addData(schools);
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
          temp={temp}
          handleClick={handleClick}
        />
      </div>
      <Button
        label={"Save"}
        className="bg-green-400 hover:bg-green-500 ml-auto self-end"
        handleClick={handleData}
      />
    </div>
  );
}

export default Education;
