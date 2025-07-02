const ArPaStg = ({
  va1,
  va2,
}: {
  va1: string | undefined;
  va2: string | undefined;
}) => {
  return (
    <p className="text-base/[24px] font-normal text-pali dark:text-pada">
      <span className="font-bold">{va1}</span> {va2}
    </p>
  );
};

export default ArPaStg;
