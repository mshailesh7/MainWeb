import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Components/Common_Components/Navbar";
import Footer from "./Components/Common_Components/Footer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import MarketPlaceHome from "./MarketPlaceWebsite/MarketPlacePages/MarketPlaceHome";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/marketplace" element={<MarketPlaceHome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
