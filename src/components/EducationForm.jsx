import React, { useState } from "react";
import Input from "./Input";
import close from "../assets/close-circle-svgrepo-com.svg";
import Button from "./Button";

function EducationForm({ setIsFormOpen, passData }) {
  const [form, setForm] = useState({ id: crypto.randomUUID() });

  function handleChange(e, label, id) {
    setForm({
      ...form,
      data: { ...form["data"], [id]: { value: e.target.value, label: label } },
    });
  }

  function handleClick() {
    passData({ form });
    setForm({ id: crypto.randomUUID() });
    setIsFormOpen(false);
  }

  return (
    <div className="absolute h-100 w-150 p-5 flex flex-col items-center bg-slate-200 border border-slate-300 shadow-xl rounded-2xl top-1/8 left-1/2 -translate-x-1/2">
      <h1 className="text-xl font-semibold mb-5">Add new school</h1>
      <img
        onClick={() => {
          setIsFormOpen(false);
          setForm({ id: crypto.randomUUID() });
        }}
        className="h-10 w-10 absolute top-2 right-2"
        src={close}
      ></img>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <Input
          value={form.data?.schoolName?.value ?? ""}
          label={"School name"}
          id={"schoolName"}
          handleChange={handleChange}
        />
        <Input
          value={form.data?.degree?.value ?? ""}
          label={"Degree"}
          id={"degree"}
          handleChange={handleChange}
        />

        <Input
          value={form.data?.startDate?.value ?? ""}
          label={"Start date"}
          id={"startDate"}
          handleChange={handleChange}
          type="month"
        />
        <Input
          value={form.data?.endDate?.value ?? ""}
          label={"End date"}
          id={"endDate"}
          handleChange={handleChange}
          type="month"
        />
      </div>
      <Button
        label={"Save"}
        className="bg-green-500 mt-auto self-end"
        handleClick={handleClick}
      />
    </div>
  );
}

export default EducationForm;
