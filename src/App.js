import './App.css';

import Header from './components/header';
import Body from './components/body';
import ProductList from './components/productList';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route
          path="/"
          element={
            <Body />
          }

        ></Route>

        <Route path="/sanpham" element={<ProductList />}></Route>

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
