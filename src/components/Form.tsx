import { useState } from "react";
import { Note } from "../App";
import TextIput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

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
            <TextIput
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <SelectInput
              label="Priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              options={[
                {
                  value: "High",
                  label: "High",
                },
                {
                  value: "Medium",
                  label: "Medium",
                },
                {
                  value: "Low",
                  label: "Low",
                },
              ]}
            />
            <SelectInput
              label="Category"
              name="category"
              value={formData.priority}
              onChange={handleChange}
              options={[
                {
                  value: "Work",
                  label: "Work",
                },
                {
                  value: "Personal",
                  label: "Personal",
                },
                {
                  value: "Ideas",
                  label: "Ideas",
                },
              ]}
            />
            <TextAreaInput
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <button className="bg-blue-600 py-2 px-6 border rounded-md cursor-pointer hover:bg-blue-500">
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
}
