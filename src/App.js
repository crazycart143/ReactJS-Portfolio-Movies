import Dashboard from "./components/Dashboard";
import { useEffect } from "react";
import Header from "./components/Header";
function App() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <main className="flex" id="root">
        <Dashboard />
        <header>
          <Header />
        </header>
      </main>
    </>
  );
}

export default App;
