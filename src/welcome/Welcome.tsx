import React from 'react';
import Coo from '../pet/pet.tsx';
import { Coo2, Coo3 } from '../pet/pet.tsx';
import People from '../pet/person.tsx';
import { People2 } from '../pet/person.tsx';
import old from '../pet/img/old.png';
import old1 from '../pet/img/old1.png';

interface WelcomeProps {
    onAdoptClick: () => void;
}

function Welcome ({ onAdoptClick }: WelcomeProps) {
    return (
        <div className="flex flex-col">
            <div className="text-left flex flex-row">
                <div className=" flex-col pr-10">
                    <h1 className="text-6xl font-bold mb-4">Find a friend</h1>
                    <p className="text-2xl">lonely? no friends? divorced? or maybe just ugly? get a pet.</p>
                    <button className="p-4 text-lg font-extrabold " onClick={onAdoptClick}> adopt</button>
                </div>
                </div>

                <div className='flex flex-row'>
                    <span className='text-6xl font-bold mb-4'>Our lovely pets!</span>
                </div>
               <div className="flex flex-row">
                   <Coo/>
                   <Coo2/>
                   <Coo3/>
               </div>
               
              
                <div className="flex flex-col justify-between mt-20  md: mt-10">
                    <h2 className="flex flex-row text-4xl font-bold mb-10" >Why we do this</h2>
                    <div className="flex flex-row mx-10">
                        <People imgSrc={old} />
                        <People2 imgSrc={old1}/>
                    </div>
                </div>
                
                
                

        </div>
    )
}

export default Welcome;