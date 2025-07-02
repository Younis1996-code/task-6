import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store/index";
import Categories from "../components/Categories/Categories";
import { useEffect } from "react";
import { matchCate } from "../redux/slices";
import ArPara from "../components/ArticleEle/ArPara";
import ArExp from "../components/ArticleEle/ArExp";
import ArTit from "../components/ArticleEle/ArTit";
import ArExam from "../components/ArticleEle/ArExam";
import ArList from "../components/ArticleEle/ArList";
import ArIma from "../components/ArticleEle/ArIma";
import ArPaStg from "../components/ArticleEle/ArPaStg";

const PostDetail = () => {
  const dispatch = useDispatch();
  const { selectedPost } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(matchCate(selectedPost?.id));
  }, [dispatch, selectedPost?.id]);

  return (
    <div>
      <p className="text-sm/[20px] text-[#6941C6] font-semibold">
        {selectedPost?.date}
      </p>

      <h2 className="text-4xl/[32px] font-bold dark:text-white my-8">
        {selectedPost?.title}
      </h2>

      <div className="w-full h-[200px] md:h-[426px] mb-8">
        <img
          className="w-full h-full object-cover"
          src={selectedPost?.image}
          alt="image"
        />
      </div>

      <ArPara val={selectedPost?.para} />

      <div className="flex flex-col gap-3 mt-3">
        <ArPara val={selectedPost?.article?.para1[0]} />

        <ArExp val={selectedPost?.article?.exp[0]} val1="font-bold" />

        <ArIma
          val={selectedPost?.article?.ima[0]}
          val1="h-[264px] lg:h-[498px]"
        />

        <ArExp val={selectedPost?.article?.exp[1]} />

        {selectedPost?.article?.para1.slice(1, 5).map((par, index) => (
          <ArPara key={index} val={par} />
        ))}

        <ArTit val={selectedPost?.article?.title1[0]} />

        <ArPara val={selectedPost?.article?.para1[5]} />

        <ArPaStg
          va1={selectedPost?.article?.strongPara[0]}
          va2={selectedPost?.article?.para1[6]}
        />

        <ArPaStg
          va1={selectedPost?.article?.strongPara[1]}
          va2={selectedPost?.article?.para1[7]}
        />

        <ArIma val={selectedPost?.article?.ima[1]} />

        <ArExp val={selectedPost?.article?.exp[2]} />

        <ArTit val={selectedPost?.article?.title1[1]} />

        {selectedPost?.article?.examples.map((exa) => (
          <ArExam key={exa.id} exa={exa} />
        ))}

        <ArTit val={selectedPost?.article?.title1[2]} />

        <ArPara val={selectedPost?.article?.para1[8]} />

        <ul className="list-disc ps-6">
          {selectedPost?.article?.para10List.map((lis) => (
            <ArList key={lis.id} lis={lis} />
          ))}
        </ul>

        <ArIma val={selectedPost?.article?.ima[2]} />

        <ArExp val={selectedPost?.article?.exp[3]} />

        <ArPara val={selectedPost?.article?.para1[9]} />

        <ArTit val={selectedPost?.article?.title1[3]} />

        <ArPara val={selectedPost?.article?.para1[10]} />

        <ArPaStg
          va1={selectedPost?.article?.strongPara[2]}
          va2={selectedPost?.article?.para1[11]}
        />

        <ArPaStg
          va1={selectedPost?.article?.strongPara[3]}
          va2={selectedPost?.article?.para1[12]}
        />

        <ArIma val={selectedPost?.article?.ima[3]} />

        <ArExp val={selectedPost?.article?.exp[4]} />

        <ArPaStg
          va1={selectedPost?.article?.strongPara[4]}
          va2={selectedPost?.article?.para1[13]}
        />

        <ArIma val={selectedPost?.article?.ima[4]} />

        <ArExp val={selectedPost?.article?.exp[5]} />

        <ArPaStg
          va1={selectedPost?.article?.strongPara[5]}
          va2={selectedPost?.article?.para1[14]}
        />

        <ArTit val={selectedPost?.article?.title1[4]} />

        <ArPara val={selectedPost?.article?.para1[15]} />
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {selectedPost?.categories.map((cate, index) => (
          <Categories cate={cate} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
