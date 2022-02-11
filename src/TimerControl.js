const TimerControl = (props) => {
    const handleClick = (e) => {
        const id = e.target.parentElement.id;
        console.log(id + " clicked");

        if (props.clockState === "paused")
        {
            if (id === 'break-decrement' && props.breakTime !== 1)
            {
                updateTime(-1, props.breakTime, "Break");
            }
            else if (id === 'break-increment' && props.breakTime !== 60)
            {
                updateTime(1, props.breakTime, "Break");
            }
            else if (id === 'session-decrement' && props.sessionTime !== 1)
            {
                updateTime(-1, props.sessionTime, "Session");
            }
            else if (id === 'session-increment' && props.sessionTime !== 60)
            {
                updateTime(1, props.sessionTime, "Session");
            }
        }
    }

    const updateTime = (valToIncOrDec, prop, timerType) => 
    {
        if (timerType === "Break")
        {
            props.setBreakTime(prop + valToIncOrDec);
        }
        else if (timerType === "Session")
        {
            props.setSessionTime(prop + valToIncOrDec);
        }

        if (props.timerType === timerType)
        {
            props.setClock([prop + valToIncOrDec, 0]);
        }
    }

    return ( 
        <div id="timer-control">
            <div id="break-label">
                Break Length
                <br />
                <button id="break-decrement" onClick={handleClick}>
                    <i className="fas fa-arrow-down"></i>
                </button>
                <div id="break-length">
                    {props.breakTime} 
                </div>
                <button id="break-increment" onClick={handleClick}>
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
            
            <div id="session-label">
                Session Length
                <br />
                <button id="session-decrement" onClick={handleClick}>
                    <i className="fas fa-arrow-down"></i>
                </button>
                <div id="session-length">
                    {props.sessionTime}
                </div>
                <button id="session-increment" onClick={handleClick}>
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        </div>
     );
}
 
export default TimerControl;