import { FC } from "react";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";

export const WEEK = {
  monday: "MON",
  tuesday: "TUE",
  wednesday: "WED",
  thursday: "THU",
  friday: "FRI",
} as const;

export const WEATHER = {
  sunny: "SUNNY",
  cloudy: "CLOUDY",
  raining: "RAIN",
  storm: "STORM",
} as const;

type Week = "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
type Weather = "sunny" | "cloudy" | "raining" | "storm";

interface Props {
  week: Week;
  weatherIcon: {
    icon: IconName;
    label?: string;
  };
  degree: string;
  weather: Weather;
}

const WeekdayForecast: FC<Props> = ({ week, weatherIcon, degree, weather }) => {
  return (
    <div className="">
      <div>{WEEK[week]}</div>
      <DynamicIcon name={weatherIcon.icon} aria-label={weatherIcon.label} />
      <div>{degree}°</div>
      <div>{weather}</div>
    </div>
  );
};

export default WeekdayForecast;
