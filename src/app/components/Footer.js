import React from "react";
import Image from "next/image";

import Logo from '../assets/logo.png';

const Footer = () =>  {
    return (
            <div className='2xl xl lg md sm text-black grid bg-black justify-center items-center'>
                <Image src={Logo} className='w-56 mb-8'/>
                <p className='text-white text-center font-poppins text-sm not-italic font-semibold leading-normal mb-11'>PT NODEWAVE SOLUSI TEKNOLOGI</p>
                <p className='text-white text-center font-poppins text-sm not-italic font-semibold leading-normal'>Graha Pena Surabaya<br/> 
                Jl. Ahmad Yani no. 88 Surabaya<br/>
                Phone : +62811258280<br/>
                Email : support@nodewave.id</p>
            </div>
    )
}

export default Footer;