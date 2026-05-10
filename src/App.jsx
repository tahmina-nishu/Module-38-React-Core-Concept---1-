import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <Todo 
        task="Learn React" 
        isDone={true}>
      </Todo>

      <Todo 
        task="Core concepts" 
        isDone={false}>
      </Todo>
      
      <Todo 
        task="Try JSX" 
        isDone={true}>
      </Todo>
    </>
  );
}

export default App;
