import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className="font-space-grotesk">
    <div className="p-6 flex  justify-between items-center bg-white shadow-md  text-black ">
        <div className="ml-8">
            <h1 className="text-3xl font-extrabold">Monteiro</h1>
        </div>
        <div className="font-semibold">
           <ul className="flex sm:gap-32 gap-16 items-center" >
                <li >
                    <Link to="/" className=" hover:bg-black hover:text-white p-3  rounded-md">Home</Link>
                </li>
                
                <li >
                    <Link to="/about" className="hover:bg-black hover:text-white p-3   rounded-md mr-8">About Me</Link>
                </li>
                <li >
                    <Link to="/projects" className="hover:bg-black hover:text-white p-3   rounded-md mr-8">Projects</Link>
                </li>
                <li >
                    <Link to="/signin" className="hover:bg-black hover:text-white p-3   rounded-md mr-8">Sign In</Link>
                </li>
           </ul>
        </div>
    </div>
    </div>
  )
}

export default Header