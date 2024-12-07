import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({sidebar,setsidebar}) => {
  return (
    <div className="py-2 absolute top-0 left-0 w-full z-20">
      <div data-aos="fade-down" className="container">
       <div className='flex justify-between items-center'>
        <h1 className='font-bold text-3xl uppercase' >Porsche <span className='text-green-600 font-medium' >911</span></h1>
        <ul className='md:flex space-x-24 text-xl hidden '>
            <li>
                <a href="#m">Home</a>
            </li>
            <li>
                <a href="#m">About</a>
            </li>
            <li>
                <a href="#m">Contact</a>
            </li>
        </ul>
        <div onClick={()=>setsidebar(!sidebar)} >
            <GiHamburgerMenu className='cursor-pointer  text-3xl  ' />
        </div>
       </div>
      </div>
    </div>
  )
}

export default Navbar
