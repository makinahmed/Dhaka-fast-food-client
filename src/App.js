import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { setUser } from "./features/auth/authSlice";
import AddBlogs from "./components/AddBlogs/AddBlogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddProducts from "./components/AddProduct/AddProducts";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Checkout from "./components/Checkout/Checkout";
import ShopCart from "./components/ShopCart/ShopCart";
import Blog from "./components/Blog/Blog";
import NotFound from "./components/NotFound/NotFound";
import PrivateOutlet from "./Routes/PrivateOutlet";
import AddCupon from "./components/AddCupon/AddCupon";
import Product from "./components/Product/Product";
import AdminRouteOutlet from "./Routes/AdminRouteOutLet";
import Payment from "./components/stripe/Payment";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
      }
    });
  }, []);

  const { email } = useSelector((state) => state?.auth);


  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="cart" element={<ShopCart />} />
            <Route path="payment" element={<Payment />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>

          <Route
            path="dashboard"
            element={
              <AdminRouteOutlet>
                <Dashboard />
              </AdminRouteOutlet>
            }
          >
            <Route
              path="addblog"
              element={
                <AdminRouteOutlet>
                  <AddBlogs />
                </AdminRouteOutlet>
              }
            />
            <Route
              path="addproduct"
              element={
                <AdminRouteOutlet>
                  <AddProducts />
                </AdminRouteOutlet>
              }
            />
            <Route
              path="addcupon"
              element={
                <AdminRouteOutlet>
                  <AddCupon />
                </AdminRouteOutlet>
              }
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
