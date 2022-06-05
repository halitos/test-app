import "./App.css";
import Card from "./card";

function App() {
  const repeatCount = [1, 2, 3, 4, 5];
  const repeatCount2 = [9, 8, 7, 6];
  const allCount = [...repeatCount, ...repeatCount2];
  allCount.sort((a, b) => a - b);

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Merhaba</h1>
      </div>
      <div className="second">
        <Card allCount={allCount} />
      </div>
    </div>
  );
}

export default App;
