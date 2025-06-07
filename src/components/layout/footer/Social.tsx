import type { FC } from 'react';
import { FaFacebookSquare } from "react-icons/fa";

const Social: FC = ({ }) => {
    return (
        <>
            <ul className="flex space-x-6">
                <li>
                    <a href="#">
                        <FaFacebookSquare/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaFacebookSquare/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaFacebookSquare/>
                    </a>
                </li>
            </ul>
        </>
    );
}
export default Social;