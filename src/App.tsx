import { useState } from "react";
import Form from "./components/Form";
import FormList from "./components/NotesList";
export type Note = {
  id: number;
  title: string;
  priority: string;
  category: string;
  description: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <h1 className="text-4xl font-bold">Notes</h1>
      <Form notes={notes} setNotes={setNotes} />
      <FormList notes={notes} />
    </main>
  );
}

export default App;
