import './App.css';
import FC from "./FunctionalComp"
import {ClassComp, ClassComp1} from "./ClassComp"

function App() {
  return (
    <div className="App">
      <h1> Welcome to the first project </h1>
      <h1> This is about the compoonents </h1>
      <FC />
      <ClassComp />
      <ClassComp1 />
    </div>
  );
}

export default App;
