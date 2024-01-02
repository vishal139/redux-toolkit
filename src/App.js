import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./pages/Product/Product";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
            <Navbar />
          <Routes>
            <Route path="/" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
