import React from "react";
import General from "./categories/General";
import Education from "./categories/Education";

function MainForm({ addData }) {
  return (
    <div className="flex flex-col flex-1 gap-3 p-5 ml-[15%]">
      <General addData={addData} />
      <Education addData={addData} />
    </div>
  );
}

export default MainForm;
