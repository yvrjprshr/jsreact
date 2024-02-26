import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("blue")
  return (
      <div className="h-screen flex flex-wrap justify-center w-full" style={{backgroundColor:color}}>
        <div className="fixed bottom-10 bg-white px-5 py-2 rounded-xl flex flex-wrap justify-center text-pink">
          <button className="bg-red-500 px-3 py-1 rounded text-white mx-2" onClick={()=>setColor("red")}>Red</button>
          <button className="bg-pink-500 px-3 py-1 rounded text-white mx-2" onClick={()=>setColor("pink")}>Pink</button>
          <button className="bg-black text-white px-3 py-1 rounded mx-2" onClick={()=>setColor("black")}>Black</button>
        </div>
      </div>
  );
}

export default App;
