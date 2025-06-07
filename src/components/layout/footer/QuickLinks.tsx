import type { FC } from 'react';


const QuickLinks: FC = ({ }) => {
    return (
        <>
            <ul className="space-y-4 pl-2">
                <li>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">Featured</a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">New Arrivals</a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">New Arrivals</a>
                </li>
            </ul>
        </>
    );
}
export default QuickLinks;