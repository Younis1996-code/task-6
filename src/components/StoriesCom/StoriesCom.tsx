import { Link } from "react-router-dom";

const StoriesCom = () => {
  return (
    <div className="w-full">
      <p className="text-base/[24px] font-semibold text-center text-primary-600 mb-3 text-[#7F56D9]">
        Newlatters
      </p>
      <h2 className="text-5xl/[60px] font-semibold text-start md:text-center dark:text-white">
        Stories and interviews
      </h2>
      <p className="text-xl/[30px] font-normal text-pali dark:text-pada text-start md:text-center mt-6 mb-10 md:px-8">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>

      <div className="w-full md:w-[65%] mx-auto">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <input
            className="text-base/[24px] font-normal focus:outline-none w-full py-3 ps-4 pe-3.5 rounded-lg shadow-xs shadow-[#1018280D] bg-white border border-[#D0D5DD]"
            type="text"
            placeholder="Enter your email"
          />
          <button className="py-3 px-5 w-fit rounded-lg shadow-xs shadow-[#1018280D] border border-[#7F56D9] bg-[#7F56D9] text-white">
            Subscribe
          </button>
        </div>
        <p className="text-sm/[20px] font-normal text-pali dark:text-pada mt-2">
          We care about your data in our{" "}
          <Link className="underline decoration-solid" to="/">
            privacy policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StoriesCom;
