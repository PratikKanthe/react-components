import './App.css';
import FC from "./FunctionalComp"
import Click from "./Components/Click"
import Counter from "./Components/Counter"
import ParentComp from './ParentComp';
import {ClassComp, ClassComp1} from "./ClassComp"

function App() {
  return (
    <div className="App">
      <h1> Welcome to the first project </h1>
      <h1> This is about the compoonents </h1>
      <FC />
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Counter />
      <ParentComp />
    </div>
  );
}

export default App;
