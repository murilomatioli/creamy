import React from "react";
import Image from 'next/image'
export default function HeaderLogo(){
    return(
        <li>
            <Image src="/images/creamyheaderlogo.png" alt="Logo da Creamy" className="rounded-lg" width={100} height={70}/>
        </li>
    )
}