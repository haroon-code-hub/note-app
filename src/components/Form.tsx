import { useState } from "react";
import { Note } from "../App";

type FormProps = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

export default function Form({ notes, setNotes }: FormProps) {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleChange(e: { target: { value: string; name: string } }) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    //update this form validation
    if (!formData.title || !formData.description) return;

    const newNote = { id: Date.now(), ...formData };
    setNotes([newNote, ...notes]);
    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
    });
  }
  return (
    <>
      <button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? "Hide Form X" : "Add new Note +"}
      </button>
      {isFormVisible && (
        <>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="border border-black rounded-lg"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="priority" className="block">
                Priority
              </label>
              <select
                name="priority"
                className="border border-black rounded-lg"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block">
                Category
              </label>
              <select
                name="category"
                className="border border-black rounded-lg"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Ideas">Ideas</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block">
                Description
              </label>
              <textarea
                name="description"
                className="border border-black rounded-lg"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="bg-blue-600 py-2 px-6 border rounded-md cursor-pointer hover:bg-blue-500">
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
}
