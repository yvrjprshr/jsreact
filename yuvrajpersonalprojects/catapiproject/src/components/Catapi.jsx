import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function Catapi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchata = async () => {
      const data = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      console.log(data["data"]);
      setData(data["data"]);
    };
    fetchata();
  }, []);

  return (
    <div>
      <ul className="flex gap-6 flex-row flex-wrap justify-center items-center">
        {
          data.map((record) => {
            return (
              <div className="flex flex-col">
                <li>{record.id} <img src={record.url} width={300} height={300} alt="" /></li>
                <button className="bg-blue-500 p-3">Add</button>
              </div>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Catapi;