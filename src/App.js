import { useEffect, useState } from "react";
import Timer from "./Timer";
import TimerControl from "./TimerControl";

function App() {

  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [clock, setClock] = useState([sessionTime, 0]);
  const [clockState, setClockState] = useState("paused");
  const [intervalId, setIntervalId] = useState();
  const [timerType, setTimerType] = useState("Session");

  useEffect(() => {
    if (clockState === "running")
    {
      document.getElementById("play-button").style.color = 'blue';
      document.getElementById("pause-button").style.color = 'black';

      setIntervalId(setInterval(() => 
      {
        countDown();
      }, 1000))
    }
    else if (clockState === "paused")
    {
      document.getElementById("play-button").style.color = 'black';
      document.getElementById("pause-button").style.color = 'blue';

      clearInterval(intervalId);
      console.log("clearing clock " + intervalId);
    }
  }, [clockState]);

  useEffect(() => {
    if (clock[0] === 0)
    {
      document.getElementById("time-left").style.color = 'red';
    }
    else
    {
      document.getElementById("time-left").style.color = 'black';
    }
  }, [clock]);

  const countDown = () => 
  {
    setClock((clock) => {
      console.log(clock[0] + " : " + clock[1]);
      if (clock[1] > 0)
      {
        return [clock[0], clock[1] - 1];
      }
      else 
      {
        if (clock[0] > 0)
        {
          return [clock[0] - 1, 59];
        }
        else
        {
          return switchTimerType();
        }
      }
    });
  }

  const switchTimerType = () =>
  {
    document.getElementById("beep").play();
    if (timerType === "Session")
    {
      setTimerType("Break");
      return [breakTime, 0];
    }
    else
    {
      setTimerType("Session");
      return [sessionTime, 0];
    }
  }

  return (
    <div className="App">
      <h1>
        25 + 5 Clock
      </h1>
      <TimerControl breakTime = {breakTime} setBreakTime={setBreakTime} sessionTime={sessionTime} setSessionTime={setSessionTime} clock={clock} setClock={setClock} clockState={clockState} timerType={timerType}/>
      <Timer clock={clock} setClock={setClock} clockState={clockState} setClockState={setClockState} setBreakTime={setBreakTime} setSessionTime={setSessionTime} timerType={timerType} setTimerType={setTimerType}/>
    </div>
  );
}

export default App;
