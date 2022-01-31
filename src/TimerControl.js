const TimerControl = (props) => {

    return ( 
        <div>
            <div id="break-label">
                Break Length
                <br />
                <button id="break-decrement">
                    Down arrow 
                </button>
                <div id="break-length">
                    {props.breakTime} 
                </div>
                <button id="break-increment">
                    Up arrow
                </button>
            </div>
            
            <div id="session-label">
                Session Length
                <br />
                <button id="session-decrement">
                    Down arrow
                </button>
                <div id="session-length">
                    {props.sessionTime}
                </div>
                <button id="session-increment">
                    Up arrow
                </button>
            </div>
        </div>
     );
}
 
export default TimerControl;