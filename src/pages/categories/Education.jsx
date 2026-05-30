import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import EducationForm from "../../components/EducationForm";

function Education({ addData }) {
  const [education, setEducation] = useState({});
  const [educationList, setEducationList] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleClick(e) {
    isClicked === false ? setIsClicked(true) : setIsClicked(false);
    const sendData = { education: education };
    console.log(education);
  }

  function passData({ form }) {
    setEducationList((prev) => [...prev, form]);
    console.log(educationList);
  }

  function handleChange(e, label, id) {
    setEducation({
      ...education,
      [id]: { value: e.target.value, label: label },
    });
  }

  function showForm() {
    isFormOpen === false ? setIsFormOpen(true) : null;
  }

  function removeEntry(id) {
    setEducationList((prev) => prev.filter((entry) => entry.id !== id));
  }

  return (
    <div className=" flex flex-col p-4 rounded-lg bg-slate-100 w-160 shadow-xl">
      <h1 className="font-semibold text-2xl mb-3">Education</h1>
      {educationList.map((obj) => (
        <div key={obj.id} className="flex items-center gap-1 mb-3">
          <ul className="gap-1 flex ml-4 m-0">
            <li className="font-semibold" key={`${obj.id}-name`}>
              {obj.data?.schoolName?.value ?? "No data"}:
            </li>
            <li className="italic" key={`${obj.id}-degree`}>
              {obj.data?.degree?.value ?? "No data"}
            </li>
            <li className="italic" key={`${obj.id}-date`}>
              {obj.data?.startDate?.value ?? " Current "}-
              {obj.data?.endDate?.value ?? " Current "}
            </li>
          </ul>
          <Button
            className="bg-red-400 hover:bg-red-500 ml-auto"
            label={"Remove"}
            handleClick={removeEntry}
            id={obj.id}
          />
        </div>
      ))}

      <Button
        label={"Add new"}
        className="bg-green-500 hover:bg-green-600"
        handleClick={showForm}
      />
      {isFormOpen === true && (
        <EducationForm setIsFormOpen={setIsFormOpen} passData={passData} />
      )}

      <div className="flex gap-3 self-end mt-auto">
        <Button
          label={"Save"}
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

export default Education;
