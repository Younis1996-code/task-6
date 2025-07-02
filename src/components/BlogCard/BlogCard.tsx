import Categories from "../Categories/Categories";
import { useDispatch, useSelector } from "react-redux";
import type { PostsTypes } from "../../data/PostsData";
import { useNavigate } from "react-router-dom";
import { showPost } from "../../redux/slices";
import arrowIcon from "../../assets/HomePhotos/Icon.svg";
import arrowIconW from "../../assets/HomePhotos/arrow-up-right.svg";
import type { RootState } from "../../redux/store";

const BlogCard = ({ post }: { post: PostsTypes }) => {
  const { mode } = useSelector((state: RootState) => state.posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleArrowClick = (id: number) => {
    dispatch(showPost(id));
    navigate(`/post/${id}`);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full h-[240px]">
        <img
          className="w-full h-full object-cover"
          src={post.image}
          alt="image"
        />
      </div>
      <div className="flex flex-col gap-3 mt-6 lg:mt-8">
        <p className="text-sm/[20px] text-[#6941C6] font-semibold">
          {post.date}
        </p>
        <div className="flex justify-between">
          <h3 className="text-2xl/[32px] font-semibold dark:text-white">
            {post.title}
          </h3>
          <img
            className="cursor-pointer"
            onClick={() => handleArrowClick(post.id)}
            src={mode === "dark" ? arrowIconW : arrowIcon}
            alt="arrowIcon"
          />
        </div>
        <p className="text-base/[24px] font-normal text-pali dark:text-pada">
          {post.title === "Grid system for better Design User Interface"
            ? post.para.slice(0, 68)
            : post.para}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {post.categories.map((cate, index) => (
            <Categories cate={cate} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
