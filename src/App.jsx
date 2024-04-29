import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Components/Common_Components/Navbar";
import Footer from "./Components/Common_Components/Footer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import AirborTag from "./pages/ArborTag";
import ArborTagAnalysis from "./pages/ArborTagAnalysis";
import UploadAnalysisForm from "./Components/ArborTagAnalysis_Components/UploadAnalysisForm";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/ArborTag" element={<AirborTag />} />
        <Route path="ArborTagAnalysis" element={<ArborTagAnalysis />} />
        <Route path="/UploadAnalysis" element={<UploadAnalysisForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
