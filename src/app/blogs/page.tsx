import Categories from '@/components/blog/Categories';
import Blogs from '@/components/home/popular-blogs/Blogs';
import Header from '@/components/layout/header/Header';
import type { FC } from 'react';


const page: FC = ({ }) => {
    return (
        <>
            <section>
                <Header title='Explore Our Blog' subTitle='Stay updated with our latest articles, insights, and updates.' />
            </section>

            <section>
                <Categories />
            </section>

            <section className='mx-auto max-w-7xl mb-12'>
                <Blogs />
            </section>
        </>
    );
}
export default page;