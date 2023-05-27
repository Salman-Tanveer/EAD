import React, { useState, useEffect } from "react";

const Timer = ({ delayResend = "10" }) => {
  
    const [delay, setDelay] = useState(+delayResend);
    const seconds = Math.floor(delay % 60);
  

    function TimeUp() {
        return "Time Up!"
    }

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
      TimeUp()
    }

    return () => {
      clearInterval(timer);
      
    };
  });

  return (
    <>
      <span>
      <h1>Timer : {seconds}</h1>
      </span>
    </>
  );
};

export default Timer;

