import logo from "./logo.svg";
import "./App.css";
import FoodPage from "./pages/FoodPage";
import FoodCard from "./components/FoodCard";
import Products from "./pages/Products";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Login/>
      <Products />
      <FoodPage />
      <FoodCard />
    </div>
  );
}

export default App;
