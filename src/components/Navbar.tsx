"use client";
import { FaPeopleRobbery } from "react-icons/fa6";

const NavBar = () => {
    return (
      <>
       <header className="flex justify-around items-center h-16 bg-white">
        <div className="flex items-center justify-around w-[180px] h-[30px] text-black font-bold text-lg">
            <FaPeopleRobbery />
            <p>Pablete</p>
        </div>
        <nav className="flex justify-around items-center w-full md:w-[495.8px] h-[30px] text-black font-bold text-lg">
          <a href="#" className="relative group">
            Home
            <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group">
            About
            <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group">
            Portfólio
            <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group">
            Contact
            <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
       </header>
      </>
    );
};

export default NavBar;