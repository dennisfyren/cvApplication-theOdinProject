import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

function General({ addData }) {
  const [general, setGeneral] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  function handleClick(e) {
    isClicked === false ? setIsClicked(true) : setIsClicked(false);
    const sendData = { general: general };
    console.log(general);
  }

  function handleChange(e, label, id) {
    setGeneral({ ...general, [id]: { value: e.target.value, label: label } });
  }

  return (
    <div className="flex flex-col p-4 rounded-lg bg-slate-100 w-160 shadow-xl h-50">
      <h1 className="font-semibold text-2xl mb-3">General</h1>
      {isClicked === false ? (
        <div className="grid grid-cols-2 gap-2">
          <Input
            value={general.fname?.value ?? ""}
            label={"First name"}
            id={"fname"}
            handleChange={handleChange}
          />
          <Input
            value={general.lname?.value ?? ""}
            label={"Last name"}
            id={"lname"}
            handleChange={handleChange}
          />
          <Input
            value={general.email?.value ?? ""}
            label={"Email"}
            id={"email"}
            type={"email"}
            handleChange={handleChange}
          />
          <Input
            value={general.phone?.value ?? ""}
            label={"Phone"}
            id={"phone"}
            type={"tel"}
            handleChange={handleChange}
          />
        </div>
      ) : Object.entries(general).length !== 0 ? (
        <ul>
          {Object.entries(general).map(([objId, objData]) => (
            <li className="list-disc ml-8" key={objId}>
              {objData.label}: {objData.value}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}

      <div className="flex gap-3 self-end mt-auto">
        <Button
          label={isClicked === false ? "Save" : "Edit"}
          className={
            isClicked === false
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-400 hover:bg-gray-500"
          }
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default General;
