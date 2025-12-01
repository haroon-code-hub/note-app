import { useState } from "react";
import Form from "./components/Form";

export type Note = {
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
    </main>
  );
}

export default App;
