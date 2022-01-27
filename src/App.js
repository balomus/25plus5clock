import { useState } from "react";
import Timer from "./Timer";
import TimerControl from "./TimerControl";

function App() {

  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [clock, setClock] = useState(sessionTime);

  return (
    <div className="App">
      25 + 5 Clock
      <TimerControl breakTime = {breakTime} setBreakTime={setBreakTime} sessionTime={sessionTime} setSessionTime={setSessionTime}/>
      <Timer clock={clock} setClock={setClock}/>
    </div>
  );
}

export default App;
