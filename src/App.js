import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Supplements from "./pages/Supplements";
import Herbs from "./pages/Herbs";
import Ingredients from "./pages/Ingredients";
import Cart from "./components/Cart";
import "./styles.css";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/supplements" element={<Supplements />} />
                    <Route path="/herbs" element={<Herbs />} />
                    <Route path="/ingredients" element={<Ingredients />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
