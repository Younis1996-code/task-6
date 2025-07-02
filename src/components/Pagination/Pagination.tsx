import { useSelector, useDispatch } from "react-redux";
import { showAllPosts } from "../../redux/slices/index";
import type { RootState } from "../../redux/store/index";
import arrowRightB from "../../assets/HomePhotos/Icon (1).svg";
import arrowLeftB from "../../assets/HomePhotos/Icon (2).svg";
import arrowRightW from "../../assets/HomePhotos/Icon (3).svg";
import arrowLeftW from "../../assets/HomePhotos/Icon (4).svg";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages, pagiPageNum, mode } = useSelector(
    (state: RootState) => state.posts
  );

  const handlePageChange = (page: number) => {
    dispatch(showAllPosts(page));
  };

  const handlePrev = () => {
    if (currentPage > 1) dispatch(showAllPosts(currentPage - 1));
  };
  const handleNext = () => {
    if (currentPage < totalPages) dispatch(showAllPosts(currentPage + 1));
  };

  return (
    <div className="grid md:grid-cols-12 w-full border-t border-[#EAECF057] pt-5 mt-8 mb-7">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="flex justify-center md:justify-start items-center md:col-span-2 gap-2 disabled:opacity-50 cursor-pointer w-full mb-5 mx-auto md:m-0 "
      >
        <img src={mode === "dark" ? arrowLeftW : arrowLeftB} alt="arrowLeftW" />
        <p className="text-sm/[20px] font-medium text-[#667085] dark:text-[#EFEFEF]">
          Previous
        </p>
      </button>
      <div className="md:col-span-8 mx-auto flex justify-center items-center gap-0.5">
        {pagiPageNum.map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 text-sm/[20px] font-medium rounded-lg cursor-pointer ${
                page === currentPage
                  ? "bg-[#F9F5FF] text-[#7F56D9] dark:text-[#112211] dark:bg-[#F9F5FF]"
                  : "text-[#667085] dark:text-[white]"
              }`}
            >
              {page}
            </button>
          ) : (
            <span
              key={index}
              className="w-10 h-10 flex justify-center items-center text-sm/[20px] font-medium rounded-lg text-[#667085] dark:text-[white]"
            >
              ...
            </span>
          )
        )}
      </div>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex justify-center md:justify-end items-center md:col-span-2 gap-2 disabled:opacity-50 cursor-pointer w-full mt-5 mx-auto md:m-0"
      >
        <p className="text-sm/[20px] font-medium  text-[#667085] dark:text-[#EFEFEF]">
          Next
        </p>
        <img
          src={mode === "dark" ? arrowRightW : arrowRightB}
          alt="arrowRightW"
        />
      </button>
    </div>
  );
};

export default Pagination;
