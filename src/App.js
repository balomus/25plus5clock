import { useEffect, useState } from "react";
import Timer from "./Timer";
import TimerControl from "./TimerControl";

function App() {

  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [clock, setClock] = useState([sessionTime]);
  const [clockState, setClockState] = useState("paused");
  const [intervalId, setIntervalId] = useState();

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
      console.log(clock);
      if (clock > 0)
      {
        return clock - 1;
      }
      else 
      {
        setClockState("paused");
        return 0;
      }
    });
  }

  return (
    <div className="App">
      <h1>
        25 + 5 Clock
      </h1>
      <TimerControl breakTime = {breakTime} setBreakTime={setBreakTime} sessionTime={sessionTime} setSessionTime={setSessionTime} clock={clock} setClock={setClock}/>
      <Timer clock={clock} setClock={setClock} clockState={clockState} setClockState={setClockState} setBreakTime={setBreakTime} setSessionTime={setSessionTime}/>
    </div>
  );
}

export default App;
