import React from 'react';

interface CardProps {
  imgSrc: string;
}

function People ({imgSrc}: CardProps){
  return (
    <div className="relative w-64 h-32 rounded-lg shadow-md border-white border-4 m-4 pl-10 bg-white">
      <img
        className="absolute -top-14 left-1/2 transform -translate-x-48 w-32 h-48 object-cover"
        src={imgSrc}
        alt=""
      />
      <p className='pl-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
  );
};
function People2 ({imgSrc}: CardProps){
    return (
      <div className="relative w-64 h-32 rounded-lg shadow-md  border-white border-4 m-4 pr-10 bg-white">
        <img
          className="absolute -top-14 right-1/2 transform translate-x-44 w-42 h-48 object-cover"
          src={imgSrc}
          alt=""
        />
         <p className='pl-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      
    );
  };

export default People;
export {People2}
