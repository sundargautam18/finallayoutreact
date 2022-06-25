import "./App.css";
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProtectedRoute from "./utils/ProtectedRoute";
import AdminPanelLayout from "./layouts/AdminPanelLayout";
import Product from "./pages/admin/Product";
import Shipping from "./pages/admin/Shipping";
import TypicalLayout from "./layouts/TypicalLayout";
function App() {
  const [toggleBar, setToggleBar] = useState(false);
  const mobileMenu = () => {
    setToggleBar(!toggleBar);
  };
  return (
    <div className="main-app">
      <header className="header">
        <nav className="navbar">
          <NavLink to="/admin" className="nav-logo">
            SG.
          </NavLink>
          <ul className={toggleBar ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="service" className="nav-link">
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contact" className="nav-link">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contact" className="nav-link">
                SignUp
              </NavLink>
            </li>
          </ul>
          <div
            className={toggleBar ? "hamburger active" : "hamburger"}
            onClick={mobileMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
      <Routes>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPanelLayout />
            </ProtectedRoute>
          }
        >
          <Route path="product" element={<Product />} />
          <Route path="shipping" element={<Shipping />} />
        </Route>
        <Route path="/" element={<TypicalLayout />}>
          <Route index element={<Service />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
