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
  points?:number;
  size?: number;
  activityLevel?: string;
  goodWithKids?: boolean;
  goodWithOtherPets?: boolean;

}
interface dataAgainst {
  type: string;
  age: number;
  size?: number;
  activityLevel?: string;
  goodWithKids?: boolean;
  goodWithOtherPets?: boolean;
}

function quizAlgorithm(data: data[], dataAgainst: dataAgainst[]): data[] {
  let favoredPet = [];
  for (let i = 0; i < data.length; i++) {
    let points = 0;
    for (let j = 0; j < dataAgainst.length; j++) {
      if (data[i].type === dataAgainst[j].type) {
        points += 3;
      }
      if (data[i].age <= dataAgainst[j].age) {
        points += 2;
      }
      if (data[i].size === dataAgainst[j].size) {
        points += 1;
      }
      if (data[i].activityLevel === dataAgainst[j].activityLevel) {
        points += 2;
      } else if (
        (data[i].activityLevel === 'High' && dataAgainst[j].activityLevel === 'Medium') ||
        (data[i].activityLevel === 'Medium' && dataAgainst[j].activityLevel === 'Low')
      ) {
        points += 1;
      }
      if (data[i].goodWithKids === dataAgainst[j].goodWithKids) {
        points += 2;
      }
      if (data[i].goodWithOtherPets === dataAgainst[j].goodWithOtherPets) {
        points += 1;
      }
    }
    data[i].points = points;
    favoredPet.push(data[i]);
  }
  return favoredPet;
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
  <div className="grid ml-10 grid-cols-5 grid-rows-3 max-w-6xl items-center mx-auto md:grid-cols-4 sm:grid-cols-2 grid-rows-5">
    {Dogs}
  </div>
)}
{selectedFilter === 'Cat' && (
  <div className="grid ml-10 grid-cols-5 grid-rows-3 max-w-6xl items-center mx-auto md:grid-cols-4 sm:grid-cols-2 grid-rows-5">
    {Cats}
  </div>
)}
{selectedFilter === 'All' && (
  <div className="grid ml-10 grid-cols-5 grid-rows-3 max-w-6xl items-center mx-auto md:grid-cols-4 sm:grid-cols-2 grid-rows-5">
    {All}
  </div>
)}
      </div>
  );
}

export default Adoption;
