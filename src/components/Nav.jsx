import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'

function Nav() {
    const [isOpen,setIsOpen]=useState(false);

    function toggleNavbar(){
        setIsOpen(!isOpen);
    }

  return (
    <header className="padding-x py-8 
    absolute z-10 w-full">
        <nav className="flex justify-between items-center
        max-container">
            <a href="/">
                <img src={headerLogo}
                alt='logo'
                width={130}
                height={40}
            />
            </a>
            <ul className="flex-1 flex justify-center
            items-center gap-16 max-lg:hidden">
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="font-montserrat
                            leading-normal text-lg
                            text-slate-gray hover:text-coral-red" 
                        >
                            {item.label}
                        </a>
                    </li>
                ))}

            </ul>
            <div onClick={toggleNavbar}>
                <img 
                    src={hamburger}
                    alt="hamburger"
                    width={25}
                    height={25}
                    className="hidden max-lg:block"
                />
            </div>
        </nav>
        {
            isOpen && (
                <div className="flex flex-col items-center justify-center
                basis-full flex-wrap cursor-pointer">
                    {navLinks.map((item)=>(
                        <a
                        href={item.href}
                        className="font-montserrat hidden max-lg:flex items-center justify-center bg-white w-full
                        leading-normal text-lg z-20 
                        text-slate-gray hover:text-coral-red"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )
        }

    </header>
  )
}

export default Nav