import React, { useContext } from "react";

const MiniCards = (props) => {

  return (
    <div className='bg-white flex rounded-lg'>
        <div className="w-96 px-4 text-sm font-poppins not-italic">
            <p className="text-black py-3.5 items-justify">{props.description}</p>
            <p className="text-black pb-3 text-teal-400">{props.name}</p>
        </div>
    </div>
  );
};

export default MiniCards;
