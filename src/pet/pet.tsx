import React from 'react';
import './Pet.css';
import './img/dog2.jpeg';
import cat from './img/cat1.png';
import cat2 from './img/cat2.png';
import fire from './img/fire.gif';
import dog from './img/dog.png'
import bird from './img/bird.png'

function Coo() {
  return (
      <div className="cat rounded-lg border-4 shadow-sm m-4">
        <div className="pet relative ">
          <img src={fire} className="fire absolute w-64 h-64 -top-8 left-0 hidden rounded-b-md" alt="" />
          <img src={cat} className="cat absolute w-40 h-60 -top-8" alt="" />
          <img src={cat2} className="cat2 absolute w-40 h-60 -top-8 hidden" alt="" />
          <span className="text text-4xl font-extrabold absolute -top-36 left-20 hidden">F@$KING ADOPT ME !!!</span>
        </div>
      </div>
  );
}
function Coo2() {
  return (
      <div className="dog rounded-lg border-4 shadow-sm m-4">
        <div className="pet2 relative ">
          <img src={dog} className="cat2 absolute w-40 h-60 -top-8 " alt="" />
          <span className="text text-4xl font-extrabold absolute top-0 left-44 hidden">F@$KING ADOPT ME !!!</span>
        </div>
      </div>
  );
}
  function Coo3() {
    return (
        <div className="parrot rounded-lg border-4 shadow-sm m-4">
          <div className="pet2 relative ">
            <img src={bird} className="cat2 absolute w-40 h-60 -top-8 " alt="" />
            <span className="text text-4xl font-extrabold absolute top-0 left-44 hidden">F@$KING ADOPT ME !!!</span>
          </div>
        </div>
    );
  }
export default Coo;
export {Coo2, Coo3};

