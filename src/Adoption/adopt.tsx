import React from "react";
import "./adopt.css";
import "../App.tsx"
import dog from "../pet/img/dog1.jpeg";
import cat from "../pet/img/OIG.If6f93vLFEK_YAn.jpeg";
import PetCard from "../Card/petCard";
import { adopted } from '../App.tsx';

interface AdoptionProps {
  onBackClick: () => void;
  onChooseClick: (pet: adopted) => void;
  onFilterChange: (choice: string) => void;
  selectedFilter: string;
  pets: data[];
}
interface data {
  name: string;
  type: string;
  img: string;
  description: string;
  age: number;
}



function Adoption({ onBackClick, onChooseClick, onFilterChange, selectedFilter, pets }: AdoptionProps) {
  const Dogs = pets.filter((pet) => pet.type === "Dog").map((pet) => <PetCard name={pet.name} description={pet.description} img={dog} onChooseClick={onChooseClick}/>);
  const Cats = pets.filter((pet) => pet.type === "Cat").map((pet) => <PetCard name={pet.name} description={pet.description} img={cat} onChooseClick={onChooseClick}/>);
  const All = [Dogs, Cats];
  return (
    <div className="adoption-page min-h-screen min-w-screen flex flex-col items-start bg-yellow-400 p-8 rounded-md">
      <div className="flex-row justify-items-start">
        <button className="p-4 text-lg font-extrabold" onClick={onBackClick}>
          Back
        </button>
      </div>
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold mb-4 pl-4 md:text-4xl">
          Choose your pet
        </h1>
        <div className="flex flex-row justify-between">
          <button className="text-2xl font-semibold mb-4 pl-6" onClick={()=> onFilterChange('Dog')}>Dogs</button>
          <button className="text-2xl font-semibold mb-4" onClick={()=> onFilterChange('Cat')}>Cats</button>
          <button className="text-2xl font-semibold mb-4" onClick={()=> onFilterChange('All')}>All</button>
        </div>
      </div>
 
         {selectedFilter === 'Dog' && (
                <div className="grid grid-cols-4 grid-rows-3 md:grid-cols-3 sm:grid-cols-2 grid-rows-5">
          {/* <PetCard name="john" description="dog" img={dog} onChooseClick={onChooseClick}/>
          <PetCard name="tusk" description="dog" img={dog} onChooseClick={onChooseClick}/> */}
          {Dogs}
  
          </div>


        )}
        {selectedFilter === 'Cat' && (
                  <div className="grid grid-cols-4 grid-rows-3 md:grid-cols-3 sm:grid-cols-2 grid-rows-5">
            {/* <PetCard name="merry" description="dog" img={cat} onChooseClick={onChooseClick}/> */}
            {Cats}
          </div>
          )}
          {selectedFilter === 'All' && (
             <div className="grid grid-cols-4 grid-rows-3 md:grid-cols-3 sm:grid-cols-2 grid-rows-5">
             {/* <PetCard name="merry" description="dog" img={cat} onChooseClick={onChooseClick}/>
             <PetCard name="john" description="dog" img={dog} onChooseClick={onChooseClick}/>
          <PetCard name="tusk" description="dog" img={dog} onChooseClick={onChooseClick}/> */}
          {All}
           </div>
          )}
      </div>
  );
}

export default Adoption;
