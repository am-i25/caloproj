import React, { useState, useEffect } from "react";
import "./custom.css";
import { data } from "../Adoption/adopt.tsx";
import bed from "../pet/img/additions/bed.png";
import food from "../pet/img/additions/food.png";
import leash from "../pet/img/additions/collar.png";
import dog from "../pet/img/dog.png";
import cat from "../pet/img/OIG.If6f93vLFEK_YAn.jpeg";


interface CustomizeProps {
  onBackClick: () => void;
  selectedPet: data | null;
}

interface Addition {
  id: number;
  name: string;
  price: number;
  img: string;
}

const additionsList: Addition[] = [
  { id: 1, name: "bed", price: 10, img: bed },
  { id: 2, name: "Food", price: 20, img: food },
  { id: 3, name: "leash", price: 30, img: leash },
];

function Customize({ onBackClick, selectedPet }: CustomizeProps) {
  const [selectedAdditions, setSelectedAdditions] = useState<Set<number>>(
    new Set()
  );

  function handleAdditions (additionId: number) {
    setSelectedAdditions((prevSelectedAdditions) => {
      const newSelectedAdditions = new Set(prevSelectedAdditions);
      if (newSelectedAdditions.has(additionId)) {
        newSelectedAdditions.delete(additionId);
      } else {
        newSelectedAdditions.add(additionId);
      }
      console.log(newSelectedAdditions);
      return newSelectedAdditions;
    });
  };
  function chosen(): string { 
    return (
      additionsList
  .filter((addition) => selectedAdditions.has(addition.id))
  .map((addition) => addition.name)
  .join(" ")
    )
  }
  useEffect(() => {
    chosen() 
  }, [selectedAdditions]);

  const totalPrice = Array.from(selectedAdditions).reduce(
    (total, additionId) => {
      const addition = additionsList.find(
        (addition) => addition.id === additionId
      );
      return total + (addition ? addition.price : 0);
    },
    0
  );


 
  
  return (
    <div className="min-h-screen min-w-screen p-8 bg-blue-50">
      <button
        className="p-2 text-lg font-extrabold rounded-md text-black"
        onClick={onBackClick}
      >
        Back
      </button>
      <div className="max-w-6xl items-center mx-auto bg-inherit">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl text-center font-bold">Finalize the process</h1>
          <h2 className="text-md text-center pb-2 font-bold">
            Get to know your pet more! and make your adoption unique!
          </h2>
          {/* left card: pet info  */}
         <div className="flex flex-row">
            <div className="flex flex-col w-1/2 max-w-1/2 h-auto p-4 rounded-lg bg-red-300 shadow-sm drop-shadow-md">
              <div className="flex flex-row">
              {selectedPet.type === 'Dog' ? (
            <img className="w-1/2 pr-10" src={dog} alt="" />
          ) : selectedPet.type === 'Cat' ? (
            <img className="w-1/2 pr-10" src={cat} alt="" />
          ) : null}
                <div className="flex flex-col justify-center w-1/2 p-4">
                  <div className="text-white text-lg font-semi">
                    Say hi to{" "}
                    <span className="font-bold">{selectedPet?.name}!</span> and
                    he's {selectedPet?.age} year's old.
                  </div>
                  <div className="text-white text-lg">
                    He's a <span className="font-bold">{selectedPet?.type}</span>
                  </div>
                  <div className="text-white text-lg">
                    {selectedPet?.name} is {selectedPet?.description}
                  </div>
                </div>
              </div>
            </div>
            {/* Right Card: process info  */}
            <div className="flex flex-col w-1/2 h-auto p-4 rounded-lg bg-white shadow-sm drop-shadow-md">
            
            {selectedPet.type === 'Dog' ? (
            <div className="">
            <h2 className="text-xl font-bold mb-4">Dog Care Tips</h2>
            <p className="text-left">
              <span role="img" aria-label="food bowl">🍲</span> Don't overfeed your dog: Overweight dogs have many health problems.
            </p>
            <p className="text-left pt-2">
              <span role="img" aria-label="calendar">📅</span> Make annual vet appointments: Experts can screen for health issues.
            </p>
            <p className="text-left pt-2">
              <span role="img" aria-label="toothbrush">🪥</span> Brush your dog’s teeth: Avoid expensive dental treatments in the future.
            </p>
            <p className="text-left pt-2">
              <span role="img" aria-label="leash">🦮</span> Exercise your dog regularly: Dogs need physical activity to stay healthy.
            </p>
            <p className="text-left pt-2">
              <span role="img" aria-label="dog house">🐕‍🦺</span> Provide proper shelter: Dogs need a safe and comfortable place to rest.
            </p>
          </div>
          
          ) : selectedPet.type === 'Cat' ? (
            <div className="">
  <h2 className="text-xl font-bold mb-4">Cat Care Tips</h2>
  <p className="text-left">
    <span role="img" aria-label="food bowl">🍲</span> Don't overfeed your cat: Overweight cats have many health problems.
  </p>
  <p className="text-left pt-2">
    <span role="img" aria-label="calendar">📅</span> Make annual vet appointments: Experts can screen for health issues.
  </p>
  <p className="text-left pt-2">
    <span role="img" aria-label="toothbrush">🪥</span> Brush your cat’s teeth: Avoid expensive dental treatments in the future.
  </p>
  <p className="text-left pt-2">
    <span role="img" aria-label="scratching post">🪵</span> Provide a scratching post: Cats need to scratch to keep their claws healthy.
  </p>
  <p className="text-left pt-2">
    <span role="img" aria-label="litter box">🚽</span> Keep the litter box clean: Cats are clean animals and prefer a clean litter box.
  </p>
</div>

          ) : null}

              
              
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-4">Choose additions:</h2>
          <hr />
          <div className="flex flex-row justify-between mx-auto max-w-3xl">
            {additionsList.map((addition) => (
              <button
                key={addition.id}
                onClick={() => handleAdditions(addition.id)}
                className={`flex flex-col p-4 m-2 rounded-lg bg-white shadow-md ${
                  selectedAdditions.has(addition.id)
                    ? "border-4 border-green-500"
                    : ""
                }`}
              >
                <img src={addition.img} alt="" />
                {addition.name}
                <div>${addition.price}</div>
              </button>
            ))}
          </div>
          <div className="flex flex-row w-full mx-auto rounded-md bg-white drop-shadow-md max-w-6xl">
  <div className="flex flex-col w-1/2 border-r border-gray-300">
    <div className="flex flex-row w-auto p-4 px-32">
      <span className="font-bold pr-2 text-lg">You Chose:</span>
      <span className="font-semibold text-lg pt-1 px-4">{chosen()}</span>
    </div>
    <div className="flex flex-col items-center py-4 p-4">
      <span className="font-bold pr-2 text-lg pl-4">Add an Engraving!</span>
      <input
        className="border-2 rounded-lg w-26 p-2"
        type="text"
        placeholder="Enter your engraving here"
        max={10}
      />
      <p className="font-light text-gray-500 text-xs px-4">max of 10 characters</p>
    </div>
  </div>
  <div className="flex flex-col w-1/2">
    <div className="flex flex-col justify-between py-4 px-32">
      <span className="font-bold text-lg">Total price:</span>
      <span className="pr-4 pt-4 font-semibold text-lg">${totalPrice}</span>
    </div>
    <div className="flex flex-row justify-center pb-4">
      <button className="font-bold p-2 text-white border-2 rounded-lg bg-black">Submit</button>
    </div>
    <div className="flex flex-row">
      <p className="font-light text-gray-500 text-xs px-4 pb-2">
        * Payment, and finalization will be done at the adoption center, this is
        to save your order.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Customize


  