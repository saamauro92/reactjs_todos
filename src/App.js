import TodosList from "./components/TodosList";

function App() {
  return (
    <div className="App">

      <h1> To do's List - React JS</h1>
      <p> Click once completed!</p>
      <div className="Container">

        <TodosList />
      </div>

    </div>
  );
}

export default App;
