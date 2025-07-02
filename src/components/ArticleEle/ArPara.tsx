const ArPara = ({ val }: { val: string | undefined }) => {
  return (
    <p className="text-base/[24px] font-normal text-pali dark:text-pada">
      {val}
    </p>
  );
};

export default ArPara;
