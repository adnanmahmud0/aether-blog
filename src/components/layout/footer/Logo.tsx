import Image from 'next/image';
import type { FC } from 'react';



const Logo: FC = ({ }) => {
    return (
        <>
            <a href="#" className='flex items-center space-x-2'>
                <Image src="/images/logo/logo.svg" width={30} height={30} alt="logo" />
                <h1 className='text-3xl font-semibold text-black pb-1'>AetherBlog</h1>
            </a>
        </>
    );
}
export default Logo;