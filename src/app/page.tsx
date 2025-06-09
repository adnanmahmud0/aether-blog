import NewBlog from "@/components/home/new-blog/NewBlog";
import NewBlogs from "@/components/home/new-blogs/NewBlogs";
import PopularBlogs from "@/components/home/popular-blogs/PopularBlogs";


export default function Page() {
  return (
    <>
      <section className="">
        <NewBlog />
      </section>

      <section className="">
        <NewBlogs />
      </section>

      <section className="m-6 md:m-0">
        <PopularBlogs />
      </section>
    </>
  )
}