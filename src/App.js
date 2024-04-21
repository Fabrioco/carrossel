import React, { useEffect, useState } from "react";

import "./App.css";

import img1 from "./imgs/img1.jpg";
import img2 from "./imgs/img2.jpg";
import img3 from "./imgs/img3.jpg";
import img4 from "./imgs/img4.jpg";

const arrfotos = [img1, img2, img3, img4];

export default function App() {
  const [contador, setContador] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (contador === 0) {
      document.getElementById("prev").disabled = true;
    } else if (contador === arrfotos.length - 1) {
      document.getElementById("next").disabled = true;
    } else {
      document.getElementById("prev").disabled = false;
      document.getElementById("next").disabled = false;
    }
  }, [contador]);

  const handleClickAdd = () => {
    setContador(contador + 1);
    setProgress(progress + 1);
  };

  const handleClickRemove = () => {
    setContador(contador - 1);
    setProgress(progress - 1);
  };

  return (
    <div>
      <div>
        <img className="picExample" src={arrfotos[contador]} alt="titulo" />
      </div>
      <div className="carrossel_container">
        {arrfotos.map((p, index) => (
          <div id="img" key={index}>
            <img className="carrossel" src={p} alt="min" />
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleClickRemove} id="prev">
          Prev
        </button>
        <button onClick={handleClickAdd} id="next">
          Next
        </button>
      </div>
      {progress}
    </div>
  );
}
