export function TimerActionButton(props) {
    if (props.timerIsRunning) {
      return (
        <div
          className='button'
          onClick={props.onStopClick}
        >
          Stop
        </div>
      );
    } else {
      return (
        <div
          className='button'
          onClick={props.onStartClick}
        >
          Start
        </div>
      );
    }
}