import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <div className="App">
      <Header />
      <Meals />
    </div>
  );
}

export default App;
