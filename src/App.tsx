import DopamineChart from "./components/charts/Dopamine";
import { LocalStorageProvider } from "./context/localStorage";

function App() {
  return (
    <LocalStorageProvider>
      <div className="App">
        <DopamineChart />
      </div>
    </LocalStorageProvider>
  );
}

export default App;
