import React from 'react';
import '../Adoption/adopt.tsx'
import { adopted } from '../App.tsx';

interface PetCardProps {
  onChooseClick: (pet: adopted) => void;
  img: string;
  type: string;
  name: string;
  description: string;
  age: number;
}

function PetCard({ onChooseClick, name, type, img, description, age }: PetCardProps) {
  return (
    <div className="pet-selection flex flex-row">
      <div className="card w-52 h-auto rounded-lg bg-white drop-shadow-xl shadow-md p-4 mb-4">
        <div className="card-image pb-2 h-fit w-fit">
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col">
          <span className="card-title text-left pb-2 font-bold">{name} is a {type}</span>
          <span className="card-title  pb-2 font-bold text-left">He's {age}</span>
          <div className="card-action flex justify-center">
            <button
              className="p-4 text-lg font-extrabold rounded-sm bg-black text-white w-44"
              onClick={() => onChooseClick({ name, type, img, description, age })}
            >
              Adopt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
