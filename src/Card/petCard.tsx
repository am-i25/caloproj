import React from 'react';
import '../Adoption/adopt.tsx'
// import { adopted } from '../App.tsx';
import { data } from '../Adoption/adopt.tsx';
import dog from "../pet/img/dog.png";
import cat from "../pet/img/OIG.If6f93vLFEK_YAn.jpeg";

interface PetCardProps {
  petData: data;
  onChooseClick: (pet: data) => void;
}

function PetCard({ onChooseClick, petData }: PetCardProps) {
  return (
    <div className="flex flex-row">
      <div className="w-52 h-auto rounded-lg bg-white drop-shadow-xl shadow-md p-4 mb-4">
        <div className="pb-2 h-fit w-fit">
          {petData.type === 'Dog' ? (
            <img src={dog} alt="" />
          ) : petData.type === 'Cat' ? (
            <img src={cat} alt="" />
          ) : null}
        </div>
           
          <div className="flex justify-between bg-gray-100 rounded-md p-2 mb-2">
            <span className="font-bold text-left">Name:</span>
            <span className="font-bold text-right">{petData.name}</span>
          </div>
          <div className="flex justify-between bg-gray-100 rounded-md p-2 mb-2">
            <span className="font-bold text-left">Type:</span>
            <span className="font-bold text-right">{petData.type}</span>
          </div>
          <div className="flex justify-between bg-gray-100 rounded-md p-2 mb-2">
            <span className="font-bold text-left">Age:</span>
            <span className="font-bold text-right">{petData.age}</span>
          </div>
         
          <div className="flex justify-between bg-gray-100 rounded-md p-2 mb-2">
            <span className="font-bold text-left">Size:</span>
            <span className="font-bold text-right">{petData.size}</span>
          </div>
          <div className="flex justify-between bg-gray-100 rounded-md p-2 mb-2">
            <span className="font-bold text-left">Activity Level:</span>
            <span className="font-bold text-right">{petData.activityLevel}</span>
          </div>
          <div className="flex justify-between bg-gray-100 rounded-md p-2 mb-2">
            <span className="font-bold text-left">Good with kids:</span>
            {petData.goodWithKids ? (
              <span style={{ color: 'green' }} className="font-bold text-right">Yes</span>
            ) : (
              <span style={{ color: 'red' }} className="font-bold text-right">No</span>
            )}
          </div>
          <div className="flex justify-between bg-gray-100 rounded-md p-2 mb-2">
            <span className="font-bold text-left">Good with other pets:</span>
            {petData.goodWithOtherPets ? (
              <span style={{ color: 'green' }} className="font-bold text-right">Yes</span>
            ) : (
              <span style={{ color: 'red' }} className="font-bold text-right">No</span>
            )}
          </div>

          <div className="flex justify-center">
            <button
              className="p-4 text-lg font-extrabold rounded-sm flex flex-row bg-black text-white w-44"
              onClick={() => onChooseClick(petData)}
            >
              Adopt
            </button>
          </div>
        </div>
      </div>
  );
}

export default PetCard;
