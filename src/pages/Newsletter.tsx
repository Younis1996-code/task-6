import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import StoriesCom from "../components/StoriesCom/StoriesCom";
import BlogCard from "../components/BlogCard/BlogCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Newsletter = () => {
  const { postsData } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-5 md:mt-18 lg:mt-8 mb-5 md:mb-10 lg:mb-0 px-8 w-full">
      <div
        data-aos="fade-down-right"
        data-aos-delay="200"
        className="w-full md:w-[93%] lg:w-[64%] md:mx-auto"
      >
        <StoriesCom />
      </div>

      <h3 className="mt-15 mb-8 text-2xl/[32px] font-semibold">
        All blog posts
      </h3>

      <div
        data-aos="fade-up-left"
        data-aos-delay="200"
        className="grid gap-8 md:grid-cols-2 md:gap-x-4 md:gap-y-6 lg:grid-cols-3 lg:gap-8 w-full"
      >
        {postsData.slice(4, 7).map((post, index) => (
          <div
            key={post.id}
            className={index === 2 ? "md:col-span-2 lg:col-span-1" : ""}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
