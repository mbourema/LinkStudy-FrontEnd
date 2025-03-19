import { useEffect } from "react";
import Button from "../components/button";

export default function Connexion() {
    useEffect(() => {
      document.title = "Connexion - LinkStudy";
    }, []);

    return (
        <div className="bg-secondary flex flex-col gap-y-5 items-center mt-[50vh] transform -translate-y-1/2 w-auto max-w-100 mx-auto rounded-xl shadow-lg">
          <p className="text-yellow-500 text-4xl font-medium racing-sans-one-regular">Connexion</p>
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
          <div className="mb-2">
          <Button text="Connexion" color="bg-yellow-500" />
          </div>
        </div>
    );
}