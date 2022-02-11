const TimerControl = (props) => {
    const handleClick = (e) => {
        const id = e.target.parentElement.id;
        console.log(id + " clicked");

        if (props.clockState === "paused")
        {
            if (id === 'break-decrement' && props.breakTime !== 1)
            {
                props.setBreakTime(props.breakTime - 1);
                if (props.timerType === "Break")
                {
                    props.setClock([props.breakTime - 1, 0]);
                }
            }
            else if (id === 'break-increment' && props.breakTime !== 60)
            {
                props.setBreakTime(props.breakTime + 1);
                if (props.timerType === "Break")
                {
                    props.setClock([props.breakTime + 1, 0])
                }
            }
            else if (id === 'session-decrement' && props.sessionTime !== 1)
            {
                props.setSessionTime(props.sessionTime - 1);
                if (props.timerType === "Session")
                {
                    props.setClock([props.sessionTime - 1, 0])
                }
            }
            else if (id === 'session-increment' && props.sessionTime !== 60)
            {
                props.setSessionTime(props.sessionTime + 1);
                if (props.timerType === "Session")
                {
                    props.setClock([props.sessionTime + 1, 0])
                }
            }
        }
    }

    const updateTime = (id, prop) => 
    {
        
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