import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";4
import logo from "../assets/logo.png"


const Navbar_custom = () => {
  return (
    <Navbar fluid rounded className='bg-opacity-0 mt-4'>
      <NavbarBrand href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-10 w-20  object-cover  rounded-full  -p-2  " alt="Flowbite React Logo" />
        <span className="hidden md:flex self-center whitespace-nowrap text-xl font-bold dark:text-white">Agni Design Consultant</span>
      </NavbarBrand>
      <div className="flex md:order-2 ">
        <Button className="hidden md:flex" gradientMonochrome='purple'>Get a Quote</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {/* <NavbarLink href="#"  active className= {`text-lg font-semibold hover:text- `}>
          Home
        </NavbarLink>
        <NavbarLink href="#" className='text-lg font-semibold'>About</NavbarLink>
        <NavbarLink href="#" className='text-lg font-semibold'>Services</NavbarLink>
        <NavbarLink href="#" className='text-lg font-semibold'>Pricing</NavbarLink>
        <NavbarLink href="#" className='text-lg font-semibold'>Contact</NavbarLink> */}
        <p className='hover:text-yellow-300 text-lg font-semibold cursor-pointer text-center '>Home</p>
        <p className='hover:text-yellow-300 text-lg font-semibold cursor-pointer text-center '>About</p>
        <p className='hover:text-yellow-300 text-lg font-semibold cursor-pointer text-center '>Services</p>
        <p className='hover:text-yellow-300 text-lg font-semibold cursor-pointer text-center '>Pricing</p>
        <p className='hover:text-yellow-300 text-lg font-semibold cursor-pointer text-center '>Contact</p>
      </NavbarCollapse>
    </Navbar>
  )
}

export default Navbar_custom
