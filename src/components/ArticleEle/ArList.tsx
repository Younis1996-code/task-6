interface ListTypes {
  lis: { para11: string };
}
const ArList = ({ lis }: ListTypes) => {
  return (
    <li className="text-base/[24px] font-normal text-pali dark:text-pada">
      {lis.para11}
    </li>
  );
};

export default ArList;
