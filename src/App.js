import "./App.css";
import ToDos from "./components/ToDos";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <h1>ToDo App</h1>
        <ToDos />
      </Wrapper>
    </div>
  );
}

export default App;
