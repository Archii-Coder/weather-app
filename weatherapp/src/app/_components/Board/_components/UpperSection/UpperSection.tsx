import { FC } from "react";
import DoubleRow from "./_components/DoubleRow";

const UpperSection: FC = () => (
  <div>
    <div className="flex justify-between">
      <div className="items-center justify-items-center px-20 py-20">
        <div>12^</div>
        <div className="flex mb-2 mt-2 ml-2 mr-2">
          <DoubleRow firstRow="HUMIDITY" secondRow="64%" firstClassName="" />
          <div className="px-8">|</div>
          <DoubleRow firstRow="WIND" secondRow="12 K/M" />
        </div>
      </div>
      <div className="px-20 py-20">
        <DoubleRow
          firstRow="FRANCE"
          secondRow="_____"
          secondClassName="mt-0 mb-0"
        />
      </div>
    </div>
  </div>
);

export default UpperSection;
