import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <nav className={`bg-secondary fixed w-full h-20 top-0 ${isOpen ? "fixed z-10" : "z-0"}`}>
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img className="size-12 w-auto" src="../images/icon.png" alt="icone_LinkStudy" />
          <Link className="text-xl font-medium racing-sans-one-regular text-black ml-2" to="/">LinkStudy</Link>
        </div>

        {/* Menu Desktop */}
        <div className="hidden xl:flex space-x-8 xl:space-x-16 text-xl font-medium racing-sans-one-regular text-white">
          <Link className="hover:text-gray-300" to="/">Home</Link>
          <Link className="hover:text-gray-300" to="/ads">Ads</Link>
          <Link className="hover:text-gray-300" to="/myads">My ads</Link>
          <Link className="hover:text-gray-300" to="/profile">Profil</Link>
          <Link className="hover:text-gray-300" to="/connexion">Connexion</Link>
          <Link className="hover:text-gray-300" to="/inscription">Inscription</Link>
        </div>

        {/* Barre de recherche */}
        <div className="flex items-center">
            <div className="w-full flex flex-row gap-x-2 mr-4">
            <input type="text" className="flex flex-col p-2 justify-start text-lg text-black border-2 rounded-3xl focus:outline-none focus:ring-black hover:scale-110 transition-transform duration-200 shadow-lg" placeholder="Entrez une adresse..."/>
            <button type="button"> 
            <svg className="hover:scale-120 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg> 
            </button>
            </div>
        </div>

        {/* Bouton Burger (visible uniquement en mobile) */}
        <button
          className="xl:hidden text-white focus:outline-none relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div id="menu_mobile" className={`absolute top-full left-0 bg-secondary bg-opacity-95 flex flex-col items-center space-y-6 py-10 px-6 text-2xl text-white racing-sans-one-regular transition-transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{
            top: "100%",
            left: 0,
            right: 0,
          }}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/ads" onClick={() => setIsOpen(false)}>Ads</Link>
        <Link to="/myads" onClick={() => setIsOpen(false)}>My ads</Link>
        <Link to="/profile" onClick={() => setIsOpen(false)}>Profil</Link>
        <Link to="/connexion" onClick={() => setIsOpen(false)}>Connexion</Link>
        <Link to="/inscription" onClick={() => setIsOpen(false)}>Inscription</Link>
      </div>
    </nav>
  );
};

export default Navbar;
