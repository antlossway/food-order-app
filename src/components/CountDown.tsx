"use client";
import Countdown from "react-countdown";

const endingDate = new Date("2023-08-01");
const CountDown = () => {
  return (
    <Countdown
      date={endingDate}
      className="text-5xl font-bold text-yellow-300"
    />
  );
};

export default CountDown;
