import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  function handleChange(e: { target: { value: string; name: string } }) {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form>
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
  );
}
