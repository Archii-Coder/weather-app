import { FC } from "react";
import { ArrowLeft } from "lucide-react";
import DoubleRow from "./_components/DoubleRow";
import TwitterComments from "./_components/TwitterComments";
import WeekdayForecast from "./_components/WeekdayForecast";

const Board: FC = () => (
  <div className="flex-1 bg-gradient-to-br from-purple-400 text-gray-600 via-purple-600 to-indigo-600 p-12 h-[calc(100vh)]">
    <div className="flex items-start gap-8">
      <button className="bg-purple-900 bg-opacity-50 rounded-full p-3">
        <ArrowLeft size={32} />
      </button>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-4xl mx-auto h-[600px] ">
        {/* UpperSection */}
        <div className="bg-[url('https://as1.ftcdn.net/v2/jpg/02/59/47/30/1000_F_259473012_lOXeOBh5rqjK0PGBb0cXbrPtgZPx4HTg.jpg')] h-[250px] text-white bg-cover bg-center">
          <div className="flex p-4 h-[250px] justify-between ">
            <div className="w-1/3 flex flex-col items-center justify-center h-full">
              <div className="text-6xl font-bold mb-2">12°</div>
              <div className="text-2sm mb-2">CLOUDY</div>
              <div className="flex w-full justify-center">
                <div className="border-r-1 pr-4 mr-4">
                  <DoubleRow
                    firstRow="HUMIDITY"
                    secondRow="64%"
                    firstClassName=""
                  />
                </div>
                <div>
                  <DoubleRow firstRow="WIND" secondRow="12 K/M" />
                </div>
              </div>
            </div>
            <div className=" px-20 py-20">
              <DoubleRow
                firstRow="FRANCE"
                secondRow=""
                firstClassName="text-2xl mb-2"
                secondClassName="w-14 h-1 bg-white rounded-full"
              />
            </div>
          </div>
        </div>
        {/* LowerSection */}
        <div className="flex-1 flex items-center p-6 m-auto h-[350px]">
          <div className="flex w-full bg-white overflow-hidden h-[280px]">
            <div className="w-1/3 p-4 border-r-3 border-purple-300 flex flex-col justify-between ">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <span className="text-blue-400 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </span>
                Twitter Feed
                <span className="text-gray-400 text-sm ml-2">#France</span>
              </h2>
              <div>
                <TwitterComments
                  text="Don't forget your sunscreen tomorrow!"
                  textClassName="text-sm"
                />
              </div>
              <div>
                <TwitterComments
                  text="Amazing weather in Paris!"
                  textClassName="text-sm"
                />
              </div>
              <button className="mt-4 text-blue-500 text-sm font-semibold">
                NEXT
              </button>
            </div>
            <div className="flex-1 p-4 flex items-center justify-center ">
              <div className="flex justify-between items-center w-[450px]">
                <WeekdayForecast
                  week="monday"
                  weatherIcon={{ icon: "sun", label: "sunny" }}
                  degree="9"
                  weather="sunny"
                />
                <WeekdayForecast
                  week="tuesday"
                  weatherIcon={{ icon: "sun", label: "sunny" }}
                  degree="12"
                  weather="sunny"
                />
                <WeekdayForecast
                  week="wednesday"
                  weatherIcon={{ icon: "cloud-rain", label: "raining" }}
                  degree="6"
                  weather="raining"
                />
                <WeekdayForecast
                  week="thursday"
                  weatherIcon={{ icon: "cloudy", label: "cloudy" }}
                  degree="12"
                  weather="cloudy"
                />
                <WeekdayForecast
                  week="friday"
                  weatherIcon={{ icon: "cloud-lightning", label: "storm" }}
                  degree="9"
                  weather="sunny"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Board;

{
  /* <LowerSection /> */
}
{
  /* <div className="flex justify-between">
          <div className="justify-items-center items-center">
            <div className="ml-5 mr-5">
              <div>twitter feed goes here</div>
              <TwitterComments
                text="dont forget your sunscreen tomorrow"
                textClassName="font-500"
              />
              <TwitterComments
                text="amazing weather in Paris"
                textClassName="font-500"
              />
            </div>
            <div>next</div>
          </div>
          <div>|</div>
          <div className="flex space-x-5 ml-5 mr-5">
            <WeekdayForecast
              week="monday"
              weatherIcon={{ icon: "sun", label: "sunny" }}
              degree="9"
              weather="sunny"
            />
            <WeekdayForecast
              week="tuesday"
              weatherIcon={{ icon: "sun", label: "sunny" }}
              degree="12"
              weather="sunny"
            />
            <WeekdayForecast
              week="wednesday"
              weatherIcon={{ icon: "cloud-rain", label: "raining" }}
              degree="6"
              weather="raining"
            />
            <WeekdayForecast
              week="thursday"
              weatherIcon={{ icon: "cloudy", label: "cloudy" }}
              degree="12"
              weather="cloudy"
            />
            <WeekdayForecast
              week="friday"
              weatherIcon={{ icon: "cloud-lightning", label: "storm" }}
              degree="9"
              weather="sunny"
            />
          </div>
        </div> */
}
