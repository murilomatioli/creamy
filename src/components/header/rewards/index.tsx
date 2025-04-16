import React from "react";
import { FiPackage } from "react-icons/fi";

export default function HeaderRewards(){
    return(
        <div className="bg-gray-300 py-2">
            <ul className="flex justify-center items-center">
                <li className="pr-2"><FiPackage size={25}/></li>
                <li className="tracking-wide text-sm font-light "><span className="font-black">FRETE GRÁTIS</span> PARA PEDIDOS ACIMA DE R$ 175</li>
            </ul>
        </div>
    )
}