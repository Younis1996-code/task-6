const ArExp = ({ val, val1 }: { val: string | undefined; val1?: string }) => {
  return (
    <p
      className={`text-base/[24px] text-pali dark:text-pada mx-auto w-full lg:w-[75%] text-center ${
        val1 ? val1 : "font-normal"
      }`}
    >
      {val}
    </p>
  );
};

export default ArExp;
