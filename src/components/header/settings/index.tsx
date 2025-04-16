import React from "react";
import Image from "next/image";
import { FaRegUserCircle, FaCartPlus } from "react-icons/fa";



export default function HeaderSettings(){
    return(
        <ul className="flex items-center w-60 justify-between ">
            <li><Image src="/images/brazilflag.png" className="rounded-xl" alt="Bandeira brasileira" width={43} height={20} /></li>
            <li><FaRegUserCircle size={30}/></li>
            <li><FaCartPlus size={30} /></li>
        </ul>
    )
}