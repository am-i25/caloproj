import React, { useState } from "react";
import "./custom.css";
import { adopted } from "../App.tsx";

interface CustomizeProps {
  onBackClick: () => void;
  selectedPet: adopted | null;
}

interface Addition {
  id: number;
  name: string;
}

const additionsList: Addition[] = [
  { id: 1, name: "Toy" },
  { id: 2, name: "Food" },
  { id: 3, name: "Bed" },
];

function Customize({ onBackClick, selectedPet }: CustomizeProps) {
  const [selectedAddition, setSelectedAddition] = useState<number | null>(null);

  const handleAdditions = (additionId: number) => {
    if (selectedAddition === additionId) {
      setSelectedAddition(null);
    } else {
      setSelectedAddition(additionId);
    }
  };

  return (
    <div className="custom min-h-screen p-8 items-center">
      <button
        className="p-2 text-lg font-extrabold rounded-md text-black"
        onClick={onBackClick}
      >
        Back
      </button>
      <div className="flex flex-col justify-center mt-4">
        <h1 className="text-2xl text-center font-bold">Finalize the process</h1>
        <h2 className="text-md text-center pr-2 pb-5 font-bold">
          Get to know your pet more! and make your adoption unique!
        </h2>
        <div className="w-auto h-auto p-4 rounded-lg bg-red-300">
          <div className="flex flex-row">
            <img className="w-1/2 pr-15" src={selectedPet?.img} alt="" />
            <div className="flex flex-col justify-center w-1/2 p-4">
              <div className="text-white text-lg font-semi">
                Say hi to{" "}
                <span className="font-bold">{selectedPet?.name}!</span> and he's{" "}
                {selectedPet?.age} year's old.
              </div>
              <div className="text-white text-lg">
                He's a{" "}
                <span className="font-bold">{selectedPet?.type}</span>
              </div>
              <div className="text-white text-lg">
                {selectedPet?.name} is {selectedPet?.description}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-4">Choose additions:</h2>
        <div className="flex flex-row overflow-x-scroll">
          {additionsList.map((addition) => (
            <button
              key={addition.id}
              onClick={() => handleAdditions(addition.id)}
              className={`flex flex-col items-center p-4 m-2 rounded-lg bg-white shadow-md ${
                selectedAddition === addition.id
                  ? "border border-green-500"
                  : ""
              }`}
            >
              {addition.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customize;
