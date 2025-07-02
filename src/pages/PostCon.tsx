import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import type { RootState } from "../redux/store";
import { matchCate, showPost } from "../redux/slices";
import BlogCard from "../components/BlogCard/BlogCard";
import StoriesCom from "../components/StoriesCom/StoriesCom";
import AOS from "aos";
import "aos/dist/aos.css";

const PostCon = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { filteredPosts, selectedPost } = useSelector(
    (state: RootState) => state.posts
  );

  const postId = Number(id);

  useEffect(() => {
    if (selectedPost?.id === postId) {
      dispatch(matchCate(postId));
    } else {
      dispatch(showPost(postId));
    }
  }, [dispatch, selectedPost?.id, postId]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-down" className="px-8">
      <div className="w-full flex flex-col-reverse gap-8 md:flex-row md:gap-4 md:justify-between lg:gap-8 mt-5 md:mt-7 lg:mt-8">
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="w-full md:w-[44.5%] lg:w-[30.5%]"
        >
          <h2 className="mt-8 md:mt-0 mb-8 text-2xl/[32px] font-semibold dark:text-white">
            Recent blog posts
          </h2>

          <div className=" flex flex-col gap-8">
            {filteredPosts.slice(0, 9).map((filPost, index) => (
              <BlogCard post={filPost} key={index} />
            ))}
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="w-full md:w-[53.5%] lg:w-[67%]"
        >
          <Outlet />
        </div>
      </div>
      <div
        data-aos="fade-down-left"
        data-aos-delay="200"
        className="w-full lg:w-[67%] lg:ms-auto mt-8"
      >
        <StoriesCom />
      </div>
    </div>
  );
};

export default PostCon;
