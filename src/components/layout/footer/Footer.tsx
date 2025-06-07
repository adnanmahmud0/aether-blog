import type { FC } from 'react';
import Social from './Social';
import QuickLinks from './QuickLinks';
import ResourcesOrHelp from './ResourcesOrHelp';
import Logo from './Logo';


const Footer: FC = ({ }) => {
    return (
        <>
            <footer className="bg-gray-900 pt-12 pb-6 px-10 tracking-wide">
                <div className="max-w-screen-xl mx-auto">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="lg:flex lg:items-center">
                            <Logo />
                        </div>

                        <div className="lg:flex lg:items-center">
                            <Social />
                        </div>

                        <div>
                            <h4 className="text-am mb-6 text-white">Quick Links</h4>
                            <QuickLinks />
                        </div>

                        <div>
                            <h4 className="text-am mb-6 text-white">Resources or Help</h4>
                            <ResourcesOrHelp />
                        </div>
                    </div>

                    <p className="text-gray-400 text-sm mt-10">© ReadymadeUI. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}
export default Footer;