import clsx from "clsx";
import { FC } from "react";
import { CircleUserRound } from "lucide-react";

interface Props {
  text: string;
  textClassName?: string;
}

const TwitterComments: FC<Props> = ({ text, textClassName }) => {
  return (
    <div className="flex">
      <div>
        <CircleUserRound />
      </div>
      <div className={clsx(textClassName)}>{text}</div>
    </div>
  );
};

export default TwitterComments;
