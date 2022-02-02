const Timer = (props) => {
    return ( 
        <div id="timer">
            <div id="timer-label">
                Session
            </div>

            <div id="time-left">
                {props.clock} : 00
            </div>

            <div id="session-controls">
                <button id="start_stop">
                    <i className="fas fa-play"></i> <i className="fas fa-pause"></i>
                </button>
                <button id="reset">
                    <i className="fas fa-sync-alt"></i>
                </button>
            </div>
        </div>
     );
}
 
export default Timer;