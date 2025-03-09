import { FC } from "react";
import TwitterComments from "./_components/TwitterComments";

const LowerSection: FC = () => (
  <div className="flex">
    <div>
      <div>twitter feed goes here</div>
      <TwitterComments
        text="dont forget your sunscreen tomorrow"
        textClassName="font-500"
      />
      <TwitterComments
        text="amazing weather in Paris"
        textClassName="font-500"
      />
      <div>next</div>
    </div>
    <div>|</div>
    <div className="flex">
      <div>monday</div>
      <div>tuesday</div>
      <div>wednesday</div>
      <div>thursday</div>
      <div>friday</div>
    </div>
  </div>
);

export default LowerSection;
