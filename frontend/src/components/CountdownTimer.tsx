import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker-cssmodules.css"

interface CountdownProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {


  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-center">
        < div className=" flex-col justify-start md:justify-center lg:justify-between items-center  text-2xl mb-4 rounded-lg text-black">

          <div className="flex space-x-4 text-center text-2xl">


            <div className="p-4 bg-gray-100 rounded-lg shadow-md shadow-lg shadow-white drop-shadow-2xl">
              <span className="block text-4xl font-bold">{timeLeft.days}</span> Days
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md shadow-lg shadow-white drop-shadow-2xl">
              <span className="block text-4xl font-bold">{timeLeft.hours}</span> Hours
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md shadow-lg shadow-white drop-shadow-2xl">
              <span className="block text-4xl font-bold">{timeLeft.minutes}</span> Minutes
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md shadow-lg shadow-white drop-shadow-2xl">
              <span className="block text-4xl font-bold">{timeLeft.seconds}</span> Seconds
            </div>


          </div>

        </div>

      </div>
    </div>
  );
};

export default CountdownTimer;
