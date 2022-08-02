import TimerForm from "./TimerForm";
import Timer from "./Timer";
import { useState } from "react";

export default function EditableTimer(props) {
  const [editFormOpen, setEditFormOpen] = useState(false);

  function handleEditClick() {
    openForm();
  }

	function handleFormClose() {
		closeForm();
	}

	function handleSubmit(timer) {
		props.onFormSubmit(timer);
		closeForm();
	}

  function openForm() {
    setEditFormOpen(true);
  }

  function closeForm() {
    setEditFormOpen(false);
  }

	function handleDeleteTimer() {
		props.onDeleteClick(props.id)
	}

  if (editFormOpen) {
    return (
      <TimerForm 
				id={props.id} 
				title={props.title} 
				project={props.project} 
			 	onFormSubmit={handleSubmit}
				onFormClose={handleFormClose}
			/>
    );
  } else {
    return (
      <Timer
        id={props.id}
        title={props.title}
        project={props.project}
        elapsed={props.elapsed}
        runningSince={props.runningSince}
				onEditClick={handleEditClick}
				onDeleteClick={handleDeleteTimer}
				onStartClick={props.onStartClick}
				onStopClick={props.onStopClick}
      />
    );
  }
}
