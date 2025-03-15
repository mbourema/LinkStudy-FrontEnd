import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";

export default function App() {
  return (
    <div id="container" className="w-full h-full bg-primary">
      <Router>
        {/* Barre de navigation */}
        <nav className="bg-secondary">
          <div className="flex flex-row">
            <div className="flex flex-col p-8 justify-start mr-12">
              <img className="size-12 w-auto" src="../images/icon.png" alt="icone_LinkStudy" />
              <Link  className="text-xl font-medium justify-center racing-sans-one-regular text-black" to="/">LinkStudy</Link>
            </div>
            <div className="flex-grow"></div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-row gap-x-16 text-xl font-medium justify-center racing-sans-one-regular text-white ml-12 mr-12">
              <Link  className="hover:text-gray-300" to="/">Home</Link>
              <Link  className="hover:text-gray-300" to="/ads">Ads</Link>
              <Link  className="hover:text-gray-300" to="/myads">My ads</Link>
              <Link  className="hover:text-gray-300" to="/profile">Profil</Link>
              <Link  className="hover:text-gray-300" to="/connexion">Connexion</Link>
              <Link  className="hover:text-gray-300" to="/inscription">Inscription</Link>
              </div>
            </div>
            <div className="flex-grow"></div>
            <div class="flex flex-col justify-center ml-12">
              <div class="w-full flex flex-row gap-x-2 mr-4">
              <input type="text" className="flex flex-col p-2 justify-start text-lg text-black border-2 rounded-3xl focus:outline-none focus:ring-black hover:scale-110 transition-transform duration-200" placeholder="Entrez une adresse..."/>
              <button type="button"> 
              <svg className="hover:scale-120 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg> 
              </button>
              </div>
            </div>
          </div>
        </nav>
        {/* Pages */}
        <div id="pages" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1 className="text-2xl text-center">About Page</h1>} />
        </Routes>
        </div>
        <footer className="bg-secondary">
          <div className="flex flex-row">
            <div className="flex flex-col justify-start ml-24 p-8">
              <div className="text-xl font-medium justify-center racing-sans-one-regular text-white">
                Nous contacter :
              </div>
              <a href="mailto:spaacetree@gmail.com" className="text-xl font-medium text-white hover:underline mt-4">
              spaacetree@gmail.com
              </a>
            </div>
            <div className="flex-grow"></div>
            <div className="flex flex-col justify-end mr-24 p-8">
              <div className="text-xl font-medium justify-center racing-sans-one-regular text-white">
                Mentions légales :
              </div>
              <Link className="text-xl font-medium text-white hover:underline mt-4" to="/mentions">
              Cliquez ici
              </Link>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

