import Historia from "./components/Historia";
import data from "./data.json"

function App() {
  return (
    <div>
      <Historia data={data} />
    </div>
  );
}

export default App;