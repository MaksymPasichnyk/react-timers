import EditableTimer from "./EditableTimer";

export default function EditableTimerList(props) {
	console.log(props.timers)

  const timers = props.timers.map((timer) => (
    <EditableTimer
			id={timer.id}
			key={timer.id}
      title={timer.title}
      project={timer.project}
      elapsed={timer.elapsed}
      runningSince={timer.runningSince}
			onFormSubmit={props.onFormSubmit}
			onDeleteClick={props.onDeleteClick}
			onStartClick={props.onStartClick}
			onStopClick={props.onStopClick}
    />
  ));

  return (
    <div id="timers">
			{timers}
    </div>
  );
}
