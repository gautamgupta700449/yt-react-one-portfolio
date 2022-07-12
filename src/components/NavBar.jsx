import React, { useState } from 'react'
import {FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
    id:1,
    link:"home"
    },
    {
      id:2,
      link:"about"
    },
    {
      id:3,
      link:"education"
    },
    {
      id:4,
      link:"contact"
    },

  ];
  return ( 
    <div className='flex justify-between items-center  w-full px-4 fixed text-white bg-black h-24 pr-8 '>
      <div>
        <h1 className='text-5xl font-signature capitalize'>Gautam Kumar</h1>
        </div>
       <ul className='hidden md:flex'>
        {links.map(({id,link}) => (
 <li key={id} className='px-4  cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:bg-green-800' > 
 <Link to={link} smooth duration={400}>
  {link}
 </Link>
</li>
        ))}
       </ul>
        
       <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size = {30}/> }
       </div>

{nav && (
    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-white'>
       {links.map(({id,link}) => (
 <li key={id} className='px-4 text-4xl py-6 cursor-pointer capitalize font-medium hover:scale-75 duration-200 hover:bg-green-800' > 
 <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
  {link}
 </Link>
</li>
        ))}
       </ul>
)}

    </div>
  )
}

export default NavBar