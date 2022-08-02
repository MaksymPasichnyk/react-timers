import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleabeTimerForm";
import { useState } from "react";
import { nanoid } from "nanoid";
import { newTimer } from "../utils/helpers";

export default function TimersDashboard() {
  const [timers, setTimers] = useState([
    {
      title: "Practice squat",
      project: "Gym Chores",
      id: nanoid(),
      elapsed: 5456099,
      runningSince: Date.now(),
    },
    {
      title: "Bake squash",
      project: "Kitchen Chores",
      id: nanoid(),
      elapsed: 1273998,
      runningSince: null,
    },
  ]);

  function handleEditFormSubmit(attrs) {
    updateTimer(attrs);
  }

  function handleCreateFromSubmit(timer) {
    createTimer(timer);
  }

  function createTimer(timer) {
    const createdTimer = newTimer(timer);
    console.log(createdTimer);
    setTimers((prevTimers) => [...prevTimers, createdTimer]);
  }

  function updateTimer(attrs) {
    console.log(attrs);

    const updatedTimers = timers.map((timer) => {
      console.log(timer.id === attrs.id);
      if (timer.id === attrs.id) {
        return Object.assign({}, timer, {
          title: attrs.title,
          project: attrs.project,
        });
      } else {
        return timer;
      }
    });

    setTimers(updatedTimers);
  }

  function deleteTimer(id) {
    console.log(id);

    const updatedTimers = timers.filter((timer) => timer.id !== id);

    setTimers(updatedTimers);
  }

  function handleStartClick(id) {
    startTimer(id);
  }

  function handleStopClick(id) {
    stopTimer(id);
  }

  function startTimer(id) {
    const now = Date.now();
    const updatedTimers = timers.map((timer) => {
      if (timer.id === id) {
        return Object.assign({}, timer, {
          runningSince: now,
        });
      } else {
        return timer;
      }
    });

    setTimers(updatedTimers);
  }

  function stopTimer(id) {
    const now = Date.now();
    const updatedTimers = timers.map((timer) => {
      if (timer.id === id) {
				const lastElapsed = now - timer.runningSince
        return Object.assign({}, timer, {
					elapsed: timer.elapsed + lastElapsed,
          runningSince: null,
        });
      } else {
        return timer;
      }
    });

    setTimers(updatedTimers);
  }

  return (
    <div className="timer-dashboard">
      <h1 className="title">Timers</h1>
      <div className="timer-dashboard__container">
        <EditableTimerList
          timers={timers}
          onFormSubmit={handleEditFormSubmit}
          onDeleteClick={deleteTimer}
					onStartClick={handleStartClick}
					onStopClick={handleStopClick}
        />
        <ToggleableTimerForm
          isOpen={true}
          onFormSubmit={handleCreateFromSubmit}
        />
      </div>
    </div>
  );
}
