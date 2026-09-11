import React, { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import logo from "../assets/logo-text.png";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
      <>
              <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/*hamburger*/}
                <button
                  className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden"
                  onClick={() => setMenuOpen((open) => !open)}
                  aria-label="Toggle navigation menu"
                  aria-expanded={menuOpen}
                >
                  {menuOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
                </button>
        
                {/*Logo*/}
                <div className="md:flex-none flex-1 flex justify-center md:justify-start">
                  <img src={logo} alt="" />
                </div>
        
                {/*nav links*/}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                  
                    <li>
                      <a href={`#home`} className={'text-slate-900 hover:text-pink-600 transition-colors'}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href={`#home`} className={'text-slate-900 hover:text-pink-600 transition-colors'}>
                        Technologies
                      </a>
                    </li>
                    <li>
                      <a href={`#home`} className={'text-slate-900 hover:text-pink-600 transition-colors'}>
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href={`#home`} className={'text-slate-900 hover:text-pink-600 transition-colors'}>
                        About
                      </a>
                    </li>
                    <li>
                      <a href={`#home`} className={'text-slate-900 hover:text-pink-600 transition-colors'}>
                        Contact
                      </a>
                    </li>                 
                </ul>
        
                {/*right buttons */}
                <div className="flex items-center gap-2 sm:gap-4">
                  <button className="sm:inline text-sm font-medium text-slate-700 hover:text-slate-900 cursor-pointer">
                    Sign In
                  </button>
            <button className="rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-sm sm:px-5 cursor-pointer">
                    Sign Up
                  </button>
                </div>
              </nav>
        
              {menuOpen && (
                <div className="border-t border-slate-100 bg-white md:hidden">
                  <ul className="flex flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-700">
                      <li>
                        <a href="#home" className="block rounded-md px-2 py-2 hover:bg-slate-50">
                          Home
                        </a>
                      </li>
                   
                    <li className="mt-1 border-t border-slate-100 pt-2 sm:hidden">
                      <a href="#home" className="block rounded-md px-2 py-2 hover:bg-slate-50">
                        Technologies
                      </a>
                    </li>
                    <li className="mt-1 border-t border-slate-100 pt-2 sm:hidden">
                      <a href="#home" className="block rounded-md px-2 py-2 hover:bg-slate-50">
                        Projects
                      </a>
                    </li>
                    <li className="mt-1 border-t border-slate-100 pt-2 sm:hidden">
                      <a href="#home" className="block rounded-md px-2 py-2 hover:bg-slate-50">
                        About
                      </a>
                    </li>
                    <li className="mt-1 border-t border-slate-100 pt-2 sm:hidden">
                      <a href="#home" className="block rounded-md px-2 py-2 hover:bg-slate-50">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </>
    );
};

export default Navbar;
