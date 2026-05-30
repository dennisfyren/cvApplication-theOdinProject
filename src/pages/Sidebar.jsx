import React from "react";
import logo from "../assets/github.svg";

function Sidebar() {
  return (
    <div className="sticky flex flex-col w-135 shadow-2xl h-screen bg-slate-300 p-3">
      <div className="flex">
        <h1 className="w-full text-3xl text-center font-semibold">
          CV Application
        </h1>
        <a href="https://github.com/dennisfyren" target="_blank">
          <img src={logo} className="h-10 w-10" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
