import type { FC } from 'react';
import Categories from './Categories';
import Blogs from './Blogs';
import Header from '@/components/layout/header/Header';


const PopularBlogs: FC = ({ }) => {
    return (
        <>
            <div className="mx-auto max-w-7xl mt-30 mb-12">

                <section>
                    <Header title="Our Blog" subTitle="We use an agile approach to test assumptions and connect with the needs of your audience early and often." />
                </section>

                <section>
                    <Categories />
                </section>

                <section>
                    <Blogs />
                </section>

            </div>
        </>
    );
}
export default PopularBlogs;