import React from "react";
import "./adopt.css";
import "../App.tsx"
import dog from "../pet/img/dog.png";
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
  const Dogs = pets.filter((pet) => pet.type === "Dog").map((pet) => <PetCard name={pet.name} description={pet.description} img={dog} type={pet.type} age={pet.age} onChooseClick={onChooseClick}/>);
  const Cats = pets.filter((pet) => pet.type === "Cat").map((pet) => <PetCard name={pet.name} description={pet.description} img={cat} type={pet.type} age={pet.age} onChooseClick={onChooseClick}/>);
  const All = [Dogs, Cats];
  return (
    <div className="adoption-page min-h-screen min-w-screen  bg-yellow-400 p-8 rounded-md">
      <div className="flex-row ">
        <button className="p-4 text-lg font-extrabold" onClick={onBackClick}>
          Back
        </button>
      </div>
      <div className="flex flex-col">
        <h1 className="text-6xl text-center font-bold mb-4 pl-4 md:text-4xl">
          Choose your pet
        </h1>
        <h3 className="text-2xl text-center font-light mb-4 pl-4 md:text-xl">
          All our pets are vaccinated and neutered
        </h3>
        <div className="flex flex-row justify-between  mx-auto">
          <button className="text-2xl font-semibold p-4 mb-4 pl-6" onClick={()=> onFilterChange('Dog')}>Dogs</button>
          <button className="text-2xl font-semibold  text-blue-700 p-4 mb-4" onClick={()=> onFilterChange('Cat')}>Cats</button>
          <button className="text-2xl font-semibold text-red-500 p-4 mb-4" onClick={()=> onFilterChange('All')}>All</button>
        </div>
      </div>
 
      {selectedFilter === 'Dog' && (
  <div className="grid grid-cols-4 grid-rows-3 md:grid-cols-3 sm:grid-cols-2 grid-rows-5 gap-x-1 gap-y-1">
    {Dogs}
  </div>
)}
{selectedFilter === 'Cat' && (
  <div className="grid grid-cols-4 grid-rows-3 md:grid-cols-3 sm:grid-cols-2 grid-rows-5 gap-x-1 gap-y-1">
    {Cats}
  </div>
)}
{selectedFilter === 'All' && (
  <div className="grid grid-cols-4 grid-rows-3 md:grid-cols-3 sm:grid-cols-2 grid-rows-5 gap-x-1 gap-y-1">
    {All}
  </div>
)}
      </div>
  );
}

export default Adoption;
