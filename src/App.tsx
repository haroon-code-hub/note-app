import { useState } from "react";
import Form from "./components/Form";
function App() {
  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <h1 className="text-4xl font-bold">Notes</h1>
      <Form />
    </main>
  );
}

export default App;
