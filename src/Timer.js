const Timer = (props) => {

    const handleReset = () => {
        props.setBreakTime(5);
        props.setSessionTime(25);
        props.setClock([25, 0]);
        props.setClockState("paused");
    }

    const handlePausePlay = () => {  
        if (props.clockState === "paused")
        {
            props.setClockState("running");
        }
        else if (props.clockState === "running")
        {
            props.setClockState("paused");
        }
    }

    return ( 
        <div id="timer">
            <div id="timer-label">
                {props.timerType}
            </div>

            <div id="time-left">
                {props.clock[0].toLocaleString('en-US', {minimumIntegerDigits: 2})} : {props.clock[1].toLocaleString('en-US', {minimumIntegerDigits: 2})}
            </div>

            <div id="session-controls">
                <button id="start_stop" onClick={handlePausePlay}>
                    <i className="fas fa-play"></i> <i className="fas fa-pause"></i>
                </button>
                <button id="reset" onClick={handleReset}>
                    <i className="fas fa-sync-alt"></i>
                </button>
            </div>
            <div>
                {props.clockState}
            </div>
        </div>
     );
}
 
export default Timer;