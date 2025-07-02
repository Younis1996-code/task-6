const Categories = ({ cate }: { cate: string }) => {
  return (
    <div className="py-0.5 px-2.5 rounded-2xl bg-[#EEF4FF] dark:bg-[#F9F5FF]">
      <p
        className={`text-sm/[20px] font-medium ${
          cate === "Design" || cate === "Leadership" || cate === "Podcasts"
            ? "text-[#6941C6]"
            : cate === "Research"
            ? "text-[#3538CD]"
            : cate === "Presentation" ||
              cate === "Tools" ||
              cate === "Interface"
            ? "text-[#C11574]"
            : cate === "Management" || cate === "Customer Success"
            ? "text-[#363F72]"
            : cate === "Product"
            ? "text-[#026AA2]"
            : cate === "Frameworks"
            ? "text-[#C4320A]"
            : cate === "SaaS"
            ? "text-[#C01048]"
            : cate === "Software Development"
            ? "text-[#027A48]"
            : ""
        }`}
      >
        {cate}
      </p>
    </div>
  );
};

export default Categories;
