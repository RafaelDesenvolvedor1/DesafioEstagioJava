import React from "react";
import logo from '../img/Tasks/Logo_Tasks.svg'

export default () => {
    return(
       <header className="w-full flex h-[350px] justify-center items-center">
         <img src={logo} alt="Logo" className="h-[100px]" />
       </header>
    )
}