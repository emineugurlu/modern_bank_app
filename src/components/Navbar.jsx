import { useState } from "react"

import {close, logo,menu} from '../assets'
import { navLinks } from '../constants'
const Navbar = () => {
  return (
   <nav className="w-full flex py-6 justify-between items-center ">
    <img  src ={logo} alt="hookbank"
    className="w-[124px] h-[32px]"/>
    <ul className="list-none sm:flex hidden justify-end items-center flex-1"></ul>
   </nav>
  )
}

export default Navbar