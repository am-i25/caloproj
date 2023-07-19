import React from 'react';
import './custom.css';
import { adopted } from '../App.tsx';

interface CustomizeProps {
     onBackClick: () => void;
     selectedPet: adopted | null;
}
function Customize({ onBackClick, selectedPet }: CustomizeProps) {
    return (
        <div className="flex-row justify-items-start">
          <button className="p-4 text-lg font-extrabold" onClick={onBackClick}>
            go back
          </button>
          <p>{selectedPet.name}</p>
          <p>{selectedPet.type}</p>
          <img src={selectedPet?.img} alt="" />
        </div>
    );
  }
  
export default Customize;