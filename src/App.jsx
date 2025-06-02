import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import SignUp from "./Pages/Signup/SignUp.jsx";
import Login from "./Pages/Login/Login.jsx";
import MissionDetail from "./Pages/Detail/MissionDetail.jsx";
import WebsitePurposeDetail from "./Pages/Detail/WebsitePurposeDetail.jsx";
import GetStartedDetail from "./Pages/Detail/GetStartedDetail.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import { AppContext } from "./context/AuthContext.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard.jsx";
import Contact from "./Pages/Contact/contact.jsx";


const App = () => {
  const auth = AppContext();
  console.log(auth?.user);
const dashboard = useLocation().pathname;
console.log(dashboard);
  return (
    <>
      
      {dashboard !=="/dashboard" && <Navbar />}
       <div style={{ paddingTop: "80px" }}>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />

          {/* User must be logged in to access Profile */}
          {auth?.user && <Route path="/profile" element={<Profile />} />}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mission-detail" element={<MissionDetail />} />
          <Route path="/cart/:id" element={<Cart />} />
         
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/website-purpose-detail"
            element={<WebsitePurposeDetail />}
          />
           <Route path="/dashboard" element={<AdminDashboard/>}/>
          <Route path="/get-started-detail" element={<GetStartedDetail />} />
          <Route path="/faq" element={<FAQ />} />

          {/* 404 Not Found fallback */}
          <Route
            path="*"
            element={
              <div
                style={{
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1 style={{ fontSize: "2rem", fontWeight: "800" }}>
                  404 | Not Found
                </h1>
              </div>
            }
          />
        </Routes>
  </div>
  <Footer/>
    </>
  );
};

export default App;