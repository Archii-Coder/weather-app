import { FC } from "react";
import TwitterComments from "./_components/TwitterComments";
import WeekdayForecast from "./_components/WeekdayForecast";

const LowerSection: FC = () => (
  <div className="flex justify-between">
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
  </div>
);

export default LowerSection;
