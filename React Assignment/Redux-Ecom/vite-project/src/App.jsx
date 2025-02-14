import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsAll from "./pages/ProductsAll";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { Provider } from "react-redux";
import mystore, { persistor } from "./redux/store/store";
import SingleProduct from "./pages/SingleProduct";
import { PersistGate } from "redux-persist/integration/react";


function App() {
  return (
    <div>
    
      <Provider store={mystore}>
<PersistGate loading={null} persistor={persistor}>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/product" element={<ProductsAll/>}></Route>
          <Route path="/product/:id" element={<SingleProduct/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
          <Route path="/wish" element={<Wishlist/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
      </PersistGate>
      </Provider>
    </div>
  )
}

export default App

/*
  redux flow -> component(home) -> action(slice -> additem)->(state) -> reducer(slice) -> store -> component
*/ 