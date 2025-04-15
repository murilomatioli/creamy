import React from "react";
import HeaderPages from './pages'
import HeaderLogo from './logo/index'
import HeaderSettings from './settings'
import HeaderSearch from './searchBar'

export default function Header(){
    return(
        <ul className="flex items-center border-1 border-gray-200 w-[70%] h-16 m-auto justify-between">
            <HeaderLogo />
            <HeaderPages />
            <HeaderSearch />
            <HeaderSettings />
        </ul>
    )

}