import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <h1 className="text-4xl font-bold">Notes</h1>
    </main>
  );
}

export default App;
