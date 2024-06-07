import "./App.css";
import BasicPie from "./Charts/BaiscPie";
import BasicBarsA from "./Charts/BasicBarsA";
import BasicBarsB from "./Charts/BasicBarsB";
import BasicScatter from "./Charts/BasicScatter";

function App() {
  return (
    <div className="app">
      <h1 className="header">Types of Graphs</h1>
      <p className="title">
        <b>Types of graphs</b> are a visual representation of a mathematical
        relationship.
      </p>
      <div className="chart-panel">
        <div className="chart">
          <h2 className="chart-title">Pie graph</h2>
          <BasicPie />
        </div>
        <div className="bar-chart">
          <h2 className="chart-title">Bar Graphs</h2>
          <BasicBarsA />
          <BasicBarsB />
        </div>
        <div className="chart">
          <h2 className="chart-title">Scatter</h2>
          <BasicScatter />
        </div>
      </div>
    </div>
  );
}

export default App;
