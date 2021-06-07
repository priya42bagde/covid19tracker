import './App.css';
import Details from "./Details"
import graph from "./graph.JPG"

function App() {
  return (
    <div className="App">
    <img src={graph} alt="graph" />
     <h3> COVID-19 Tracker</h3>
      <Details />
    </div>
  );
}

export default App;
