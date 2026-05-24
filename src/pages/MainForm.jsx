import React from "react";
import General from "./categories/General";

function MainForm({ setGeneral, general }) {
  return (
    <div className="p-5">
      <General setGeneral={setGeneral} general={general} />
    </div>
  );
}

export default MainForm;
