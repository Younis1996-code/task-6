import ArExp from "./ArExp";
import ArIma from "./ArIma";
import ArPara from "./ArPara";

interface ExamTypes {
  exa: { epe1: string; para9: string; ima2: string; exp2: string };
}

const ArExam = ({ exa }: ExamTypes) => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-base/[24px] font-bold text-pali dark:text-pada">
        {exa.epe1}
      </h4>

      <ArPara val={exa.para9} />

      <ArIma val={exa.ima2} />

      <ArExp val={exa.exp2} />
    </div>
  );
};

export default ArExam;
