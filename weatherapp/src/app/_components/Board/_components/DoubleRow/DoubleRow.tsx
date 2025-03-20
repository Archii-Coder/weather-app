import { FC } from "react";
import clsx from "clsx";

interface Props {
  firstRow: string;
  secondRow: string;
  firstClassName?: string;
  secondClassName?: string;
}

const DoubleRow: FC<Props> = ({
  firstRow,
  secondRow,
  firstClassName,
  secondClassName,
}) => {
  return (
    <div className="flex flex-col items-center ">
      <div className={clsx(firstClassName)}>{firstRow}</div>
      <div className={clsx(secondClassName)}>{secondRow}</div>
    </div>
  );
};

export default DoubleRow;
