import React from "react";
import { MdOutlineLocalShipping, MdCreditCard, MdOutlineStorefront } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";

export default function HomeBenefits(){
    return( 
        <div className="flex text-sm font-bold text-gray-700 ">
            <div className="flex space-x-4 items-center border-1 w-72 border-r-0 border-gray-800 px-2">
                <MdOutlineLocalShipping size={60} className="text-sky-400"/>
                <p>Frete grátis para Pedidos Acima de R$ 175</p>
            </div>
            <div className="flex border-1 w-72 space-x-4 items-center border-r-0 border-gray-800 px-2">
                <MdCreditCard size={90} className="text-sky-400"/>
                <p>Parcelamento em até 6x no cartão, com parcela mínima de R$ 50</p>
            </div>
            <div className="flex border-1 w-72 space-x-4 items-center border-r-0 border-gray-800 px-2">
                <MdOutlineStorefront size={80} className="text-sky-400"/>
                <p w-fit>Retire no Quiosque mais próximo em até 1 dia útil após sua compra</p>
            </div>
            <div className="flex border-1 w-72 space-x-4 items-center border-gray-800 px-2">
                <RiCoupon2Line size={60} className="text-sky-400"/>
                <p>10% OFF na primeira compra com o cupom PRIMEIRA10</p>
            </div>
        </div>
    )
}