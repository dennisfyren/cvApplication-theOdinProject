import { useState } from "react";
import MainForm from "./pages/MainForm";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";

function App() {
  const [general, setGeneral] = useState({});

  return (
    <div className="flex">
      <Sidebar general={general} />
      <MainForm setGeneral={setGeneral} general={general} />
    </div>
  );
}

export default App;
