const TimerControl = (props) => {
    return ( 
        <div>
            <div id="break-label">
                Break Length
                <br />
                <button>
                    Up arrow 
                </button>
                {props.breakTime} 
                <button>
                    Down arrow
                </button>
            </div>
            <div id="session-label">
                Session Length
                <br />
                Up arrow {props.sessionTime} Down arrow
            </div>
        </div>
     );
}
 
export default TimerControl;