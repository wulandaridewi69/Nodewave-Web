import React from "react";
import Image from "next/image";

import Logo from '../assets/logo.png';

const Header = () =>  {
    return (
            <div className='2xl xl lg md sm text-black flex bg-black justify-between items-center'>
                <Image src={Logo}/>
                <div className='text-white flex gap-x-8'>
                    <p>Website</p>
                    <p>Mobile Apps</p>
                    <p>Portfolio</p>
                    <p className='pr-5 pl-5 pt-3 pb-3 rounded-full bg-teal-400'>Make an App</p>
                </div>
            </div>
    )
}

export default Header;