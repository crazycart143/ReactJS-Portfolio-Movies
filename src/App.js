import Dashboard from "./components/dashboard";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <main id="root">
        <Dashboard />
      </main>
    </>
  );
}

export default App;
