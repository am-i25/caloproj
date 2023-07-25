import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Coo from './pet/pet.tsx';
import Adoption from './Adoption/adopt.tsx';
import Customize from './Customize/Customize.tsx'
import Welcome from './welcome/Welcome.tsx';
// import { data } from './Adoption/adopt.tsx';

export interface data {
  id: string; 
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

  
type PetsResponse = data[];
function App() {
  const [currentPage, setCurrentPage] = useState<string>('welcome');
  const [selectedPet, setSelectedPet] = useState<data | null>(null)
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [pets, setPets] = useState<PetsResponse>([]);


  useEffect(() => {
    let isMounted = true;
    fetch('http://localhost:3001/pets')
      .then((res) => res.json() as Promise<PetsResponse>)
      .then((data) => {
        if (isMounted) setPets(data);
        console.log(data);
      });
    return () => { isMounted = false };
  }, []);
  
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
  const handlePetSelection = (pet: data) => {
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
        <Adoption pets={pets} onBackClick={handleBackClick} onChooseClick={handlePetSelection} onFilterChange={handleFilterChange} selectedFilter={selectedFilter} dataAgainst={pets}/>

      )} 
       {currentPage === 'customize' &&  (    
        
        <Customize onBackClick={handleBackClick} selectedPet={selectedPet} />
  
        )} 
       </>
  );
}


export default App;