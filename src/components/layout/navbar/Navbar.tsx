"use client";

import { useState, type FC } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo";
import NavItem from './NavItem';

const Navbar: FC = ({ }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen((prev) => !prev);
    }

    return (
        <>
            <header className="border-b border-gray-300 bg-white min-h-[60px] px-3 py-3 tracking-wide relative z-50">
                <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4">
                    <Logo/>
                    <div id="collapseMenu"
                        className={` ${menuOpen ? 'block' : 'max-lg:hidden'} lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}>
                        <button onClick={handleToggle} id="toggleClose" className="lg:hidden fixed top-4 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer">
                            <IoClose className='text-black' size={25} />
                        </button>
                        <NavItem/>
                    </div>

                    <div className="flex items-center ml-auto space-x-2">
                        <button
                            className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all">
                                Login
                        </button>
                        <button
                            className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all">
                                Sign up
                        </button>
                        <button onClick={handleToggle} id="toggleOpen" className="lg:hidden cursor-pointer">
                            <RxHamburgerMenu className='text-black' size={25} />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Navbar;
