import type { FC } from 'react';


const ResourcesOrHelp: FC = ({ }) => {
    return (
        <>
            <ul className="space-y-4 pl-2">
                <li>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">Terms &amp; Conditions</a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">Sale</a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">Documentation</a>
                </li>
            </ul>
        </>
    );
}
export default ResourcesOrHelp;