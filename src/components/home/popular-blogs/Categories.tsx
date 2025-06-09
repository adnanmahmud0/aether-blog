import type { FC } from 'react';


const Categories: FC = ({ }) => {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-3 lg:mb-10 mb-8">
                <p className="px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium">
                    All (10)
                </p>

                <p className="px-4 py-2 rounded-full border text-black dark:text-white dark:hover:text-black font-medium hover:bg-gray-100">
                    Health (03)
                </p>

                <p className="px-4 py-2 rounded-full border text-black dark:text-white dark:hover:text-black font-medium hover:bg-gray-100">
                    Lifestyle (01)
                </p>

                <p className="px-4 py-2 rounded-full border text-black dark:text-white dark:hover:text-black font-medium hover:bg-gray-100">
                    Travel (03)
                </p>

                <p className="px-4 py-2 rounded-full border text-black dark:text-white dark:hover:text-black font-medium hover:bg-gray-100">
                    Technology (02)
                </p>

                <p className="px-4 py-2 rounded-full border text-black dark:text-white dark:hover:text-black font-medium hover:bg-gray-100">
                    Culture (01)
                </p>
            </div>
        </>
    );
}
export default Categories;