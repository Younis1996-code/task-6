import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { showPost } from "../../redux/slices";
import type { PostsTypes } from "../../data/PostsData";
import Categories from "../Categories/Categories";
import arrowIcon from "../../assets/HomePhotos/arrow-up-right (1).svg";
import arrowIconW from "../../assets/HomePhotos/arrow-up-right.svg";
import ArPara from "../ArticleEle/ArPara";

const RecBlogCard = ({
  postRe,
  postRe1,
  postRe2,
}: {
  postRe: PostsTypes;
  postRe1?: string;
  postRe2?: string;
}) => {
  const { mode } = useSelector((state: RootState) => state.posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleArrowClick = (id: number) => {
    dispatch(showPost(id));
    navigate(`/post/${id}`);
  };

  return (
    <div
      className={`flex flex-col gap-6 ${
        postRe1 ? postRe1 : "md:flex-row md:gap-6 mt-0"
      }`}
    >
      <div className={`w-full ${postRe2 ? postRe2 : "h-[200px]"}`}>
        <img
          className="w-full h-full object-cover"
          src={postRe.image}
          alt="image"
        />
      </div>
      <div className="w-full flex flex-col gap-3 md:mt-0">
        <p className="text-sm/[20px] text-[#6941C6] font-semibold">
          {postRe.date}
        </p>
        <div className="flex justify-between">
          <h3 className="text-2xl/[32px] font-semibold dark:text-white">
            {postRe.title}
          </h3>
          <div className="w-[24px] h-[28px]">
            {mode === "dark" ? (
              <img
                className="cursor-pointer w-full h-full object-cover"
                onClick={() => handleArrowClick(postRe.id)}
                src={arrowIconW}
                alt="arrowIcon"
              />
            ) : (
              <img
                className="cursor-pointer w-full h-full object-cover"
                onClick={() => handleArrowClick(postRe.id)}
                src={arrowIcon}
                alt="arrowIcon"
              />
            )}
          </div>
        </div>

        <ArPara val={postRe.para} />

        <div className="flex flex-wrap gap-2 mt-3">
          {postRe.categories.map((cate, index) => (
            <Categories cate={cate} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecBlogCard;
