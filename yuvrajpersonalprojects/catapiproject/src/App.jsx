import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Catapi, Catopedia, ImportantCats } from "./components";

function App() {
  return (
    <>
      <div className="bg-gray-500">
        <Catopedia />
        <ImportantCats />
        <Catapi />
      </div>
    </>
  );
}

export default App;
