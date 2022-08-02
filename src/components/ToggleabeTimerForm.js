import TimerForm from "./TimerForm";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export default function ToggleableTimerForm(props) {
	const [isOpen, setIsOpen] = useState(false);

	function handleFormOpen() {
		setIsOpen(true);
	}

	function handleFormClose() {
		setIsOpen(false)
	}

	function handleFormSubmit(timer) {
		props.onFormSubmit(timer);
		setIsOpen(false);
	}

  if (isOpen) {
    return <TimerForm
						onFormSubmit={handleFormSubmit}
						onFormClose={handleFormClose}
					/>;
  } else {
    return (
      <div className="content">
        <button 
					className="button"
					onClick={handleFormOpen}
				>
          <AiOutlinePlus />
        </button>
      </div>
    );
  }
}
