import "./App.css";
import Fruits from "./Fruits";

function App() {
  const fruits = [
    {id: 1, name: 'Jackfruit', season: 'Summer'},
    {id: 2, name: 'Mango', season: 'Summer'},
    {id: 3, name: 'Strawberry', season: 'Spring'},
    {id: 4, name: 'Lichi', season: 'Summer'},
    {id: 5, name: 'Orange', season: 'Winter'},
    {id: 6, name: 'Date', season: 'Winter'}
  ]
  
  return (
    <>
      {fruits.map(fruit => <Fruits fruit = {fruit}></Fruits>)}

    </>
  );
}

export default App;
