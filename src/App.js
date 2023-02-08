import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import LoginForm from "./Pages/LoginForm/LoginForm";
import Menu from "./Pages/Menu/Menu";
import Shop from "./Pages/Shop/Shop";
import SignUpForm from "./Pages/SignUpForm/SignUp";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { setUser } from "./features/auth/authSlice";
import AddBlogs from "./components/AddBlogs/AddBlogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddProducts from "./components/AddProduct/AddProducts";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Checkout from "./components/Checkout/Checkout";
import ViewCart from "./components/ViewCart/ViewCart";
import Cart from "./components/Cart/Cart";
import ShopCart from "./components/ShopCart/ShopCart";
 
 

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Cart" element={<ShopCart />} />
        <Route>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index path="addblog" element={<AddBlogs />} />
            <Route path="addproduct" element={<AddProducts />} />
            
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
