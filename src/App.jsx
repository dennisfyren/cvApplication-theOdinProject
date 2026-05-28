import { useState } from "react";
import MainForm from "./pages/MainForm";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";

function App() {
  const [data, setData] = useState({});

  function addData(newData) {
    setData({ ...data, ...newData });
    console.log(data);
  }

  return (
    <div className="flex">
      <Sidebar data={data} />
      <MainForm addData={addData} />
    </div>
  );
}

export default App;
