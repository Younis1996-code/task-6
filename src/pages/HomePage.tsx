import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store/index";
import BlogCard from "../components/BlogCard/BlogCard";
import Pagination from "../components/Pagination/Pagination";
import { showAllPosts } from "../redux/slices";
import { useEffect } from "react";
import RecBlogCard from "../components/BlogCard/RecBlogCard";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const { postsData, pagiPage, currentPage } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    dispatch(showAllPosts(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div data-aos="fade-up" className="mt-5 md:mt-7 lg:mt-12">
      <h1
        data-aos="fade-left"
        className="font-inter dark:text-white text-7xl/[100%] md:text-[160px]/[100%] xl:text-[230px]/[100%] py-1 md:py-5 xl:py-8 font-bold border-y border-gray-300 text-center"
      >
        THE BLOG
      </h1>

      <section className="px-8 lg:px-0">
        <h2
          data-aos="fade-right"
          data-aos-delay="200"
          className="mt-12 md:mt-14 mb-8 text-2xl/[32px] font-semibold dark:text-white"
        >
          Recent blog posts
        </h2>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="grid lg:grid-cols-2 gap-8"
        >
          <BlogCard post={postsData[0]} />

          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="flex flex-col gap-8"
          >
            <RecBlogCard postRe={postsData[1]} />

            <RecBlogCard postRe={postsData[2]} />
          </div>
        </div>

        <RecBlogCard
          postRe={postsData[3]}
          postRe1="lg:flex-row lg:gap-8 mt-15"
          postRe2="h-[200px] md:h-[188px] lg:h-[246px]"
        />
      </section>

      <section className="px-8 lg:px-0">
        <h2 className="mb-8 mt-14 md:mt-8 lg:mt-14 text-2xl/[32px] font-semibold dark:text-white">
          All blog posts
        </h2>
        <div
          data-aos="fade-up-right"
          data-aos-delay="200"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-4 md:gap-x-6 lg:gap-y-12 lg:gap-x-8 "
        >
          {pagiPage.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <Pagination />
      </section>
    </div>
  );
};

export default HomePage;
