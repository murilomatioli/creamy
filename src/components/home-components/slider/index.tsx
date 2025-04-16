'use client'

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Slider(){
    const [index, setIndex] = useState(0)
    const [url, setUrl] = useState('/images/slider/1.webp')
    const primeiraRender = useRef(true);
    
    useEffect(() =>{
        if(primeiraRender.current){
            primeiraRender.current = false;
            return;
        }
        if(index == 0){
            setUrl("/images/slider/1.webp");
        }
        if(index == 1){
            setUrl("/images/slider/2.webp");
        }
        if(index == 2){
            setUrl("/images/slider/3.webp");
        }
        if(index >= 3){
            setIndex(0);
        }
        if(index <= -1){
            setIndex(2);
        }
    }, [index])
    
    const changeImg = () => {
        setIndex(prev => prev + 1)
    }
    const prevImg = () => {
        setIndex(prev => prev - 1)
    }
    useEffect(()=> {
        const intervalId = setInterval(changeImg , 8000);

        return () => clearInterval(intervalId)
    }, [index])
 
    return(
        <>
        <div className="flex relative items-center">
            <Image src={url} width={500} layout="responsive" height={400} alt="image"/>
            <button className="absolute text-5xl cursor-pointer h-full hover:bg-gray-100 transition opacity-80" onClick={prevImg}><IoIosArrowBack /></button>
            <button className="absolute right-0 text-5xl cursor-pointer h-full hover:bg-gray-100 transition opacity-80" onClick={changeImg}><IoIosArrowForward /></button>
        </div>

        <ul className="flex space-x-4 mt-4 justify-center">
            {Array.from({ length: 3}).map((_, i) => (
                <li key={i} className="bg-gray-300 rounded-full size-3 cursor-pointer hover:bg-blue-400 transition" onClick={() =>setIndex(i)}></li>
            ))}
        </ul>

        </>
    )

}