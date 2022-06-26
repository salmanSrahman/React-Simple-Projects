import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import { Route, Routes } from "react-router-dom";
import MealDetails from "./Components/MealDetails/MealDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Meals />}></Route>
        <Route path="/home" element={<Meals />}></Route>
        <Route path="/meal/:mealId" element={<MealDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
