import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/header';
import Body from './components/body';
import ProductList from './components/productList';
import Footer from './components/footer';
import ProductDetail from './components/productDetail';
import Payment from './components/payment';
import Login from './components/login';

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
        <Route path="/giohang" element={<Payment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sanpham" element={<ProductList />}></Route>
        <Route path="/chitiet" element={<ProductDetail />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
