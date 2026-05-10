import "./App.css";
import Flowers from "./Flowers";
// import Todo from "./Todo";

function App() {
  const flowers = ['Rose', 'Sunflower', 'Belly', 'Water Lily']

  
  return (
    <>
      {flowers.map(flower => <Flowers name = {flower}></Flowers>)}

    </>
  );
}

export default App;
