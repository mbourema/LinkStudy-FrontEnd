import { useEffect } from "react";
import Button from "../components/button";

export default function Inscription() {
    useEffect(() => {
      document.title = "Inscription - LinkStudy";
    }, []);

    return (
      <div className="bg-secondary flex flex-col gap-y-5 items-center mt-[50vh] transform -translate-y-1/2 w-auto max-w-100 mx-auto rounded-xl shadow-lg">
      <p className="text-yellow-500 text-4xl font-medium racing-sans-one-regular">Inscription</p>
      <form>
        <label htmlFor="name" className="text-sm text-black font-semibold mb-2">Name</label>
        <input
                id="name"
                type="string"                  
                className="bg-gray-50 border text-black text-sm rounded-lg block w-70 p-1.5"
                placeholder="Enter your name"
            />
      </form>
      <form>
        <label htmlFor="forname" className="text-sm text-black font-semibold mb-2">Forname</label>
        <input
                id="forname"
                type="string"                  
                className="bg-gray-50 border text-black text-sm rounded-lg block w-70 p-1.5"
                placeholder="Enter your forname"
            />
      </form>
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
      <form>
        <label htmlFor="pseudo" className="text-sm text-black font-semibold mb-2">Pseudo</label>
        <input
                id="pseudo"
                type="string"                  
                className="bg-gray-50 border text-black text-sm rounded-lg block w-70 p-1.5"
                placeholder="Enter your pseudo"
            />
      </form>
      <form>
          <label htmlFor="date" className="text-sm text-black font-semibold mb-2">Date of birth</label>
          <input
              id="date"
              type="date"
              className="bg-gray-50 border text-black text-sm rounded-lg block w-70 p-1.5"
              placeholder="Enter your date of birth"
          />
      </form>
      <div className="mb-2">
      <Button text="Inscription" color="bg-yellow-600" />
      </div>
    </div>
    );
}