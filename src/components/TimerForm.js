import { useState } from "react";

export default function TimerForm(props) {

  const submitText = props.id ? "Update" : "Create";
  const formData = {
    title: props.title || "",
    project: props.project || "",
  };
  const [form, setForm] = useState(formData);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleSubmit() {
  	props.onFormSubmit({
  		id: props.id,
  		title: form.title,
  		project: form.project
  	})
  }

  return (
    <div className="timer-f">
      <div className="timer-f__body">
        <div className="timer-f__form form-timer">
          <div className="form-timer__field">
            <label>Title</label>
            <input
              type="text"
              value={form.title}
              name="title"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-timer__field">
            <label>Project</label>
            <input
              type="text"
              value={form.project}
              name="project"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-timer__buttons">
            <button className="button button--blue" onClick={handleSubmit}>
              {submitText}
            </button>
            <button className="button button--red" onClick={props.onFormClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
