import { useEffect } from "react";
import Button from "../components/button";

export default function Connexion() {
    useEffect(() => {
      document.title = "Connexion - LinkStudy";
    }, []);

    return (
        <div className="bg-secondary flex flex-col justify-between items-center mt-[50vh] transform -translate-y-1/2 w-100 mx-auto rounded-xl shadow-lg">
          <form>
            <label htmlFor="email" className="text-sm text-black font-semibold mb-2">Email</label>
            <input
                    id="email"
                    type="string"                  
                    className="bg-gray-50 border text-black text-sm rounded-lg block w-70 p-1.5"
                    placeholder="Enter your email"
                />
          </form>
          <form>
            <label htmlFor="mdp" className="text-sm text-black font-semibold mb-2">Password</label>
            <input
                    id="mdp"
                    type="password"                  
                    className="bg-gray-50 border text-black text-sm rounded-lg block w-70 p-1.5"
                    placeholder="Enter your password"
                />
          </form>
          <div className="mt-2 mb-2">
          <Button text="Connexion" color="bg-yellow-600" />
          </div>
        </div>
    );
}