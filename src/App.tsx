import React, { useState } from 'react';
import './App.css';
import './index.css';
import Coo from './pet/pet.tsx';
import Adoption from './Adoption/adopt.tsx';
import Customize from './Customize/Customize.tsx'
import Welcome from './welcome/Welcome.tsx';

const data = [
  {
    name: "Buddy",
    type: "Dog",
    img: "dog",
    description: "Friendly and playful",
    age: 3
  },
  {
    name: "Whiskers",
    type: "Cat",
    img: "dog",
    description: "Independent and curious",
    age: 2
  },
  {
    name: "Max",
    type: "Dog",
    img: "dog",
    description: "Loyal and protective",
    age: 4
  },
  {
    name: "Simba",
    type: "Cat",
    img: "cat",
    description: "Adventurous and energetic",
    age: 1
  },
  {
    name: "Bella",
    type: "Dog",
    img: "Cat",
    description: "Affectionate and gentle",
    age: 5
  },
  {
    name: "Luna",
    type: "Cat",
    img: "Cat",
    description: "Calm and graceful",
    age: 3
  }
];
interface adopted {
  name: string;
  type: string;
  img: string;
  description: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<string>('welcome');
  const [selectedPet, setSelectedPet] = useState<adopted | null>(null)
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  const handleAdoptClick = () => {
    setCurrentPage('adoption');
  };
  const handleChooseClick = () => {
    setCurrentPage('customize');
  };
  const handleBackClick = () => {
    if(currentPage === 'adoption'){
    setCurrentPage('welcome');
  }else{
    setCurrentPage('adoption');
  }
}
 
// pet selection section ------------------------------------
  const handlePetSelection = (pet: adopted) => {
    setSelectedPet(pet)
    handleChooseClick()

  };
 
// pet filter section ------------------------------------
const handleFilterChange = (choice: string) => {
  setSelectedFilter(choice)
}
  return (
<>
      {currentPage === 'welcome' && (
         <div className="welcome min-h-screen flex items-center justify-between p-8">
        <Welcome onAdoptClick={handleAdoptClick} />
          </div>            
        
      )}
      {currentPage === 'adoption' && (
        <Adoption pets={data} onBackClick={handleBackClick} onChooseClick={handlePetSelection} onFilterChange={handleFilterChange} selectedFilter={selectedFilter}/>

      )} 
       {currentPage === 'customize' &&  (    
       <div className="custom min-h-screen flex items-center justify-between p-8">  
        <Customize onBackClick={handleBackClick} selectedPet={selectedPet} />
        </div>
        )} 
       </>
  );
}


export default App;
export { adopted };
