import Dashboard from "./components/Dashboard";
import RequestState from "./context/requestState";

function App() {
  return (
    <RequestState>
      <Dashboard/>
    </RequestState>
  );
}

export default App;
