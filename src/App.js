import { useState } from "react";
import Timer from "./Timer";
import TimerControl from "./TimerControl";

function App() {

  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [clock, setClock] = useState(sessionTime);

  return (
    <div className="App">
      <h1>
        25 + 5 Clock
      </h1>
      <TimerControl breakTime = {breakTime} setBreakTime={setBreakTime} sessionTime={sessionTime} setSessionTime={setSessionTime} clock={clock} setClock={setClock}/>
      <Timer clock={clock} setClock={setClock}/>
    </div>
  );
}

export default App;
