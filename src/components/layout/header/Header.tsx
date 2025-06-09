import type { FC } from 'react';

type HeaderProps = {
  title: string;
  subTitle: string;
};


const Header: FC<HeaderProps> = ({ title, subTitle }) => {
    return (
        <>
            <div className="text-center lg:mb-10 mt-36 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">{subTitle}</p>
            </div>
        </>
    );
}
export default Header;