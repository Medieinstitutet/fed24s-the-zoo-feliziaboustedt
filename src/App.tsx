import "./App.css";
import { AppRouter } from "./Router";
import { AnimalProvider } from "./context/AnimalContext";

function App() {
  return (
    <>
      <AnimalProvider>
        <AppRouter />
      </AnimalProvider>
    </>
  );
}

export default App;
