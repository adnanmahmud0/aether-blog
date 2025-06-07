import type { FC } from 'react';
import Image from 'next/image';

const NavItem: FC = ({ }) => {
    return (
        <>
            <ul
                className={`lg:flex lg:gap-x-8 lg:absolute lg:left-1/2 lg:-translate-x-1/2 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}>
                <li className="mb-6 hidden max-lg:block">
                    <a href="#" className='flex items-center space-x-2'>
                        <Image src="/images/logo/logo.png" width={30} height={30} alt="logo" />
                        <h1 className='text-3xl font-semibold text-black pb-1'>AetherBlog</h1>
                    </a>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3"><a href='#'
                    className="hover:text-blue-700 text-[15px] text-blue-700 block font-medium">Home</a></li>
                <li className="group max-lg:border-b max-lg:border-gray-300 max-lg:py-3 relative">
                    <a href='#'
                        className="hover:text-blue-700 text-slate-900 font-medium text-[15px] lg:hover:fill-blue-700 block">
                        Pages
                    </a>
                </li>
                <li className="group max-lg:border-b max-lg:border-gray-300 max-lg:py-3 relative">
                    <a href='#'
                        className="hover:text-blue-700 text-slate-900 font-medium text-[15px] lg:hover:fill-blue-700 block">
                        Blog
                    </a>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3"><a href='#'
                    className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block">Team</a></li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3"><a href='#'
                    className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block">About</a></li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3"><a href='#'
                    className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block">Contact</a></li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3"><a href='#'
                    className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block">Source</a></li>
            </ul>
        </>
    );
}
export default NavItem;