const ArIma = ({ val, val1 }: { val: string | undefined; val1?: string }) => {
  return (
    <div className={`w-full ${val1 ? val1 : "h-[225px] lg:h-[426px]"}`}>
      <img className="w-full h-full object-cover" src={val} alt="image" />
    </div>
  );
};

export default ArIma;
