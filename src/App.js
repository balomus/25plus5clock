import { useEffect, useState } from "react";
import Timer from "./Timer";
import TimerControl from "./TimerControl";

function App() {

  const [breakTime, setBreakTime] = useState(1);
  const [sessionTime, setSessionTime] = useState(1);
  const [clock, setClock] = useState([sessionTime, 0]);
  const [clockState, setClockState] = useState("paused");
  const [intervalId, setIntervalId] = useState();
  const [timerType, setTimerType] = useState("Session");

  useEffect(() => {
    if (clockState === "running")
    {
      

      setIntervalId(setInterval(() => 
      {
        countDown();
      }, 1000))
    }
    else if (clockState === "paused")
    {
      clearInterval(intervalId);
      console.log("clearing clock " + intervalId);
    }
  }, [clockState]);

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
          // setClockState("paused");
          return switchTimerType();
        }
      }
    });
  }

  const switchTimerType = () =>
  {
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
      <Timer clock={clock} setClock={setClock} clockState={clockState} setClockState={setClockState} setBreakTime={setBreakTime} setSessionTime={setSessionTime} timerType={timerType}/>
    </div>
  );
}

export default App;
