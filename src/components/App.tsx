import { useState } from "react";
import Button from "./Button";
import Entryform from "./Entryform";
import Header from "./Header";

function App() {
  const [showform, setShowForm] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-[#4d8ffb] via-[#4d8ffb] to-[#ca33ff]">
      <div className="flex flex-col items-center min-h-screen w-full px-4 py-10">
        <main className="w-full max-w-4xl">
          <Header />
          {showform ? (
            <Entryform />
          ) : (
            <Button onClick={() => setShowForm(true)} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
