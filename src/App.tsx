import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.js";
import Ads from "./pages/ads.jsx";
import Mentions from "./pages/mentions.js";
import MyAds from "./pages/myads.js";
import Profile from "./pages/profile.js";
import Inscription from "./pages/inscription.js";
import Connexion from "./pages/connexion.js";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  return (
    <div id="container" className="flex flex-col bg-primary">
      <Router>
        <Navbar />
        <div id="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ads" element={<Ads />} />
            <Route path="/myads" element={<MyAds />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/mentions" element={<Mentions />} />
          </Routes>
        </div>
        <footer className="bg-secondary">
          <div className="flex flex-row h-20">
            <div className="flex flex-col justify-start ml-8 md:ml-24">
              <div className="text-xl font-medium justify-center racing-sans-one-regular text-white text-footer">
                Nous contacter :
              </div>
              <a href="mailto:spaacetree@gmail.com" className="text-xl font-medium text-white hover:underline mt-4 text-footer">
              spaacetree@gmail.com
              </a>
            </div>
            <div className="flex-grow"></div>
            <div className="flex flex-col justify-end mr-8 md:mr-24">
              <div className="text-xl font-medium justify-center racing-sans-one-regular text-white text-footer">
                Mentions légales :
              </div>
              <Link className="text-xl font-medium text-white hover:underline mt-4 text-footer" to="/mentions">
              Cliquez ici
              </Link>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
};

export default App;

