import type { FC } from 'react';
import Image from 'next/image';


const Logo: FC = ({ }) => {
    return (
        <>
            <a href="#" className='flex justify-center items-center space-x-2'>
                <Image src="/images/logo/logo.png" width={30} height={30} alt="logo" />
                <h1 className='max-md:hidden text-3xl font-semibold text-black pb-1'>AetherBlog</h1>
            </a>
        </>
    );
}
export default Logo;