const Timer = (props) => {
    return ( 
        <div>
            <div id="timer-label">
                Session
            </div>

            <div id="time-left">
                {props.clock} : 00
            </div>

            <div id="session-controls">
                <button id="start_stop">
                    Play/Pause
                </button>
                <button id="reset">
                    Reset
                </button>
            </div>
        </div>
     );
}
 
export default Timer;