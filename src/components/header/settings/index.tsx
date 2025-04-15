import React from "react";
import Image from "next/image";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function HeaderSettings(){
    return(
        <ul className="flex items-center">
            <li><Image src="/images/brazilflag.png" className="" alt="Bandeira brasileira" width={50} height={20} /></li>
            <li></li>
            <li><FontAwesomeIcon icon={faUser}/></li>
        </ul>
    )
}