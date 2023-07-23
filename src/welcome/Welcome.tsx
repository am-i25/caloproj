import React from 'react';
import Coo from '../pet/pet.tsx';
import { Coo2, Coo3 } from '../pet/pet.tsx';
import People from '../pet/person.tsx';
import { People2 } from '../pet/person.tsx';
import old from '../pet/img/old.png';
import old1 from '../pet/img/old1.png';
import background from '../pet/img/background.jpeg'

interface WelcomeProps {
    onAdoptClick: () => void;
}

function Welcome ({ onAdoptClick }: WelcomeProps) {
    return (
        <div className="flex flex-col mx-auto">
            <div className="flex flex-row justify-end">
                <button
                        className="p-2 text-lg font-extrabold rounded-md text-black"
                        
                      >
                        Log In
                      </button>
            </div>
            <div className="landing text-left flex flex-row items-center">
            
                <div className=" flex-col pr-10 pl-10">
                    <h1 className="text-6xl font-bold mb-4">Find a friend</h1>
                    <p className="text-2xl">lonely? no friends? divorced? or maybe just ugly? get a pet.</p>
                    <button className="p-4 text-lg font-extrabold " onClick={onAdoptClick}> Adopt</button>
                </div>
                <img src={background} alt="background" className="w-full h-1/2"/>
                </div>


                    <div className='flex flex-row mx-auto'>
                        <span className='text-4xl font-bold mb-10 '>Pets are groomed and vaccinated!</span>
                    </div>
                                   <div className="flex flex-row mx-auto ">
                       <Coo/>
                       <Coo2/>
                       <Coo3/>
                                   </div>
                    <div className="flex flex-col justify-between items-center mt-20  md: mt-10">
                        <h2 className=" text-4xl font-bold mb-10" >Why we do this</h2>
                        <div className="flex flex-row mx-auto">
                            <People imgSrc={old} />
                            <People2 imgSrc={old1}/>
                        </div>
                    </div>
                
        
                
                
                

        </div>
    )
}

export default Welcome;