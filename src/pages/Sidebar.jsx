import React from "react";
import logo from "../assets/github.svg";

function Sidebar({ data }) {
  return (
    <div>
      <div className="sticky flex flex-col w-135 shadow-2xl h-screen bg-slate-300 p-3">
        <div className="flex">
          <h1 className="w-full text-3xl text-center font-semibold">
            CV Application
          </h1>
          <a href="https://github.com/dennisfyren" target="_blank">
            <img src={logo} className="h-10 w-10" />
          </a>
        </div>
        <ul className="p-5">
          <HandleData data={data} />
        </ul>
      </div>
    </div>
  );
}

function HandleData({ data }) {
  return data.map((item) =>
    Object.entries(item).map(([category, section]) => {
      return (
        <div>
          <h2>{category}</h2>
          <ul>
            {section.map((obj) =>
              Object.entries(obj).map(([key, value]) => (
                <li key={value.id}>
                  {key}: {value.value}
                </li>
              )),
            )}
          </ul>
        </div>
      );
    }),
  );
}

export default Sidebar;
