import { FC } from "react";
import { Menu } from "lucide-react";

const Header: FC = () => (
  <header className="flex bg-white items-center  px-6 py-3 relative">
    <div className="flex items-center">
      <Menu className="h-6 w-6 text-black mr-3" />
      <div className="text-black font-serif text-2xl font-bold">WeatherApp</div>
    </div>
    <p className="absolute text-black left-1/2 transform -translate-x-1/2  ">
      Sunday, 12th December
    </p>
  </header>
);

export default Header;
