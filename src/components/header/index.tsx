import React from "react";
import HeaderPages from './pages'
import HeaderLogo from './logo/index'
import HeaderSettings from './settings'
import HeaderSearch from './searchBar'
import HeaderRewards from './rewards'

export default function Header(){
    return(
        <>
            <HeaderRewards/>
            <ul className="flex items-center w-[70%] h-16 m-auto justify-between">
                <HeaderLogo />
                <HeaderPages />
                <HeaderSearch />
                <HeaderSettings />
            </ul>
        </>
    )

}