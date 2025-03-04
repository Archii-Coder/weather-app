import { FC } from "react";
import { ArrowLeft } from "lucide-react";

const Board: FC = () => (
  <div className="flex-1 bg-gradient-to-br from-purple-400 via-purple-600 to-indigo-600 p-12 h-[calc(100vh)]">
    <div className="flex items-start gap-8">
      <button className="bg-purple-900 bg-opacity-50 rounded-full p-3">
        <ArrowLeft size={32} />
      </button>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-4xl mx-auto h-[600px]"></div>
    </div>
  </div>
);

export default Board;
