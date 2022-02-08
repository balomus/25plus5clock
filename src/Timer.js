import { useState } from "react";

const Timer = (props) => {
    const [intervalId, setIntervalId] = useState(0);

    const handleReset = () => {
        props.setBreakTime(5);
        props.setSessionTime(25);
        props.setClock(25);
        props.setClockState("paused");
    }

    const handlePausePlay = () => {
        // if (intervalId)
        // {
        //     clearInterval(intervalId);
        //     setInterval(0);
        //     return;
        // }

        // setInterval(() => {
        //     props.setClock(props.clock - 1);
        // }, 1000)
    }

    return ( 
        <div id="timer">
            <div id="timer-label">
                Session
            </div>

            <div id="time-left">
                {props.clock} : 00
            </div>

            <div id="session-controls">
                <button id="start_stop" onClick={handlePausePlay}>
                    <i className="fas fa-play"></i> <i className="fas fa-pause"></i>
                </button>
                <button id="reset" onClick={handleReset}>
                    <i className="fas fa-sync-alt"></i>
                </button>
            </div>
        </div>
     );
}
 
export default Timer;