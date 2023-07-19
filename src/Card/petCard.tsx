import React from 'react';
import '../Adoption/adopt.tsx'
import { adopted } from '../App.tsx';

interface PetCardProps {
  onChooseClick: (pet: adopted) => void;
  img: string;
  name: string;
  description: string;
}

function PetCard({ onChooseClick, name, img, description }: PetCardProps) {
  return (
    <div className="pet-selection flex flex-row">
      <div className="card w-52 h-auto rounded-sm bg-white drop-shadow-xl shadow-md p-4 m-4">
        <div className="card-image pb-2 h-fit w-fit">
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col">
          <span className="card-title text-center pb-2 font-bold">{name}</span>
          <span className="card-desc text-start text-base font-semibold pb-2">
            {description}
          </span>
          <div className="card-action flex justify-center">
            <button
              className="p-4 text-lg font-extrabold rounded-sm bg-black text-white w-44"
              onClick={() => onChooseClick({ name, type: 'Dog', img, description })}
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
