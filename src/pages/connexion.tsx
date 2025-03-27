import { useEffect, useState } from "react";
import Button from "../components/button";
import Swal from "sweetalert2";


export default function Connexion() {
    useEffect(() => {
      document.title = "Connexion - LinkStudy";
    }, []);

    // État pour stocker les valeurs du formulaire
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    // État pour gérer les erreurs par champ
    const [error, setError] = useState<{ [key: string]: string }>({});

    // Fonction pour mettre à jour les données du formulaire
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Supprime l'erreur associée au champ s'il est corrigé
    if (error[name]) {
      setError((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
    };

    // Fonction pour envoyer le formulaire
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault(); // Empêche le rechargement de la page par défaut
      let newErrors: { [key: string]: string } = {};
      try {
            const response = await fetch("http://localhost:5000/users/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData)
            });
      
            if (!response.ok) {
              throw new Error("Échec de la connexion.");
            }
      
            Swal.fire({
              text: `Congratulations, you are now connected`,
              icon: "success",
              position: "center",
              showConfirmButton: false,
              timer: 3000,
            }).then(() => {                   
              document.location.href = "/";
            });
      
          } catch (error) {
            Swal.fire({
              text: "Error during the connexion process",
              icon: "error",
              position: "center",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: false
            });
            newErrors.email = "The email or the password is incorrect";
            newErrors.password = "The email or the password is incorrect";
            setError(newErrors);
          }
    }

    return (
        <div className="bg-secondary flex flex-col gap-y-5 items-center mt-[50vh] transform -translate-y-1/2 w-auto max-w-lg mx-auto rounded-xl shadow-lg p-5">
          <p className="text-yellow-500 text-4xl font-medium racing-sans-one-regular">Connexion</p>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
        {[
          { name: "email", label: "Email", type: "email" },
          { name: "password", label: "Password", type: "password" }
        ].map(({ name, label, type }) => (
          <div key={name} className="mb-3">
            <label htmlFor={name} className="text-sm text-black font-semibold">
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              className={`bg-gray-50 border text-black text-sm rounded-lg block w-full p-1.5 ${
                error[name] ? "border-yellow-500 border-2" : "border-black border-2"
              }`}
              placeholder={`Entrez votre ${label.toLowerCase()}`}
              value={formData[name as keyof typeof formData]}
              onChange={handleInputChange}
            />
            {error[name] && <p className="text-yellow-500 text-sm font-semibold">{error[name]}</p>}
          </div>
        ))}
          <div className="mx-auto mt-3">
          <Button text="Connexion" color="bg-yellow-500" />
          </div>
      </form>
      </div>
    );
}