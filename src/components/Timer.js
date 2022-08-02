import { useEffect, useState, useCallback } from "react";
import { renderElapsedString } from "../utils/helpers";

// icons
import { BsFillTrashFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { TimerActionButton } from "./TimerActionButton";


export default function Timer(props) {
	const [, updateState] = useState();
	const forceUpdate = useCallback(() => updateState({}), [])

	useEffect(() => {
		const timerId = setInterval(() => forceUpdate(), 50)

		return () => {
			clearInterval(timerId)
		}
	}, [])

	const elapsedString = renderElapsedString(props.elapsed, props.runningSince);

	function handleStartClick() {
		props.onStartClick(props.id)
	}

	function handleStopClick() {
		props.onStopClick(props.id)
	}

  return (
    <div className="timer">
      <div className="timer__content">
        <div className="timer__header">{props.title}</div>
        <div className="timer__meta">{props.project}</div>
        <div className="timer__elapse">
          <h2>
            {elapsedString}
          </h2>
        </div>
        <div className="timer__actions">
          <span onClick={props.onEditClick} className="timer__edit-timer">
            <BiEdit />
          </span>
          <span
						className="timer__trash-timer"	 
						onClick={props.onDeleteClick}
					>
            <BsFillTrashFill />
          </span>
        </div>
      </div>
      <TimerActionButton 
				timerIsRunning={!!props.runningSince}
				onStartClick={handleStartClick}
				onStopClick={handleStopClick}
			/>
    </div>
  );
}
