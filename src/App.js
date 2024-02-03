import logo from "./logo.svg";
import "./App.css";
import FoodPage from "./pages/FoodPage";
import FoodCard from "./components/FoodCard";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<FoodPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      
    </div>
  );
}

export default App;
