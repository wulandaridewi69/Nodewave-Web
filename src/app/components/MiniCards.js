import React, { useContext } from "react";

const MiniCards = (props) => {

  return (
    <div className='bg-white flex'>
        <div className="w-96">
            <p className="text-black">{props.description}</p>
            <p className="text-black">{props.name}</p>
        </div>
    </div>
  );
};

export default MiniCards;
