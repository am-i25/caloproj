import React from 'react';

interface CardProps {
  imgSrc: string;
}

function People ({imgSrc}: CardProps){
  return (
    <div className=" px-24">
      <div className="relative w-64 h-32 rounded-lg shadow-md border-white border-4 m-4 pl-10 bg-white">
        <img
          className="absolute -top-12 left-1/2 transform -translate-x-48 w-32 h-48 object-cover"
          src={imgSrc}
          alt=""
        />
        <p className='pl-4 font-medium'>Adopting a pet brought joy and companionship to my life.</p>
        <p className='pl-4 font-medium pt-4 text-slate-400'>Fatma</p>
      </div>
    </div>
  );
};
function People2 ({imgSrc}: CardProps){
    return (
      <div className=" px-24">
      <div className="relative w-64 h-32 rounded-lg shadow-md  border-white border-4 m-4 pr-10 bg-white">
        <img
          className="absolute -top-14 right-1/2 transform translate-x-52 w-42 h-48 object-cover"
          src={imgSrc}
          alt=""
        />
         <p className='font-medium'>My new pet helped me heal and find happiness again. I'm I'm very grateful !</p>
         <p className='pl-4 font-medium pt-4 text-slate-400'>Mohamed</p>
      </div>
      </div>
      
    );
  };

export default People;
export {People2}
