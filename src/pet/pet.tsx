import React from "react";
import "./Pet.css";
import "./img/dog2.jpeg";
import cat from "./img/cat1.png";
import cat2 from "./img/cat2.png";
import fire from "./img/fire.gif";
import dog from "./img/dog.png";
import bird from "./img/bird.png";

function Coo() {
  return (
    <div className="flex flex-col p-10">
        <img src={cat} className="w-40 h-60" alt="" />
          <span className="text-center font-bold">jinny</span>
        </div>
  );
}
function Coo2() {
  return (
    <div className="flex flex-col p-10">
        <img src={dog} className="w-40 h-60" alt="" />
          <span className="text-center font-bold ">Murphy</span>
        </div>
  );
}
function Coo3() {
  return (
    <div className="flex flex-col p-10">
        <img src={bird} className="w-40 h-52 mt-6" alt="" />
          <span className="text-center font-bold">Sparrow</span>
        </div>
  );
}
export default Coo;
export { Coo2, Coo3 };
