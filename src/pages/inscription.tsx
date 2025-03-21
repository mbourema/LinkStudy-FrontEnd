import { useEffect, useState } from "react";
import Button from "../components/button";

export default function Inscription() {
  useEffect(() => {
    document.title = "Inscription - LinkStudy";
  }, []);

  // États pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    forname: "",
    email: "",
    password: "",
    pseudo: "",
    date_of_birth: ""
  });

  // État pour gérer les erreurs
  const [error, setError] = useState<string | null>(null);

  // Fonction pour mettre à jour les données du formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Fonction pour envoyer le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Échec de l'inscription.");
      }

      alert("Utilisateur créé avec succès !");
    } catch (err) {
      setError("Erreur lors de l'ajout de l'utilisateur.");
    }
  };

  return (
    <div className="bg-secondary flex flex-col gap-y-5 items-center mt-[50vh] transform -translate-y-1/2 w-auto max-w-100 mx-auto rounded-xl shadow-lg">
      <p className="text-yellow-500 text-4xl font-medium racing-sans-one-regular">Inscription</p>
      
      {/* Formulaire avec une seule balise form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        <label htmlFor="name" className="text-sm text-black font-semibold mb-2">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="bg-gray-50 border text-black text-sm rounded-lg block w-70 p-1.5"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="forname" className="text-sm text-black font-semibold mb-2">Forname</label>
        <input
          id="forname"
          name="forname"
          type="text"
          className="bg-gray-50 border text-black text-sm rounded-lg block w-70 p-1.5"
          placeholder="Enter your forname"
          value={formData.forname}
          onChange={handleInputChange}
        />

        <label htmlFor="email" className="text-sm text-black font-semibold mb-2">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="bg-gray-50 border text-black text-sm rounded-lg block w-70 p-1.5"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="password" className="text-sm text-black font-semibold mb-2">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="bg-gray-50 border text-black text-sm rounded-lg block w-70 p-1.5"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <label htmlFor="pseudo" className="text-sm text-black font-semibold mb-2">Pseudo</label>
        <input
          id="pseudo"
          name="pseudo"
          type="text"
          className="bg-gray-50 border text-black text-sm rounded-lg block w-70 p-1.5"
          placeholder="Enter your pseudo"
          value={formData.pseudo}
          onChange={handleInputChange}
        />

        <label htmlFor="date_of_birth" className="text-sm text-black font-semibold mb-2">Date of Birth</label>
        <input
          id="date_of_birth"
          name="date_of_birth"
          type="date"
          className="bg-gray-50 border text-black text-sm rounded-lg block w-70 p-1.5"
          value={formData.date_of_birth}
          onChange={handleInputChange}
        />

        <div className="mb-2">
          <Button text="Inscription" color="bg-yellow-500" />
        </div>

        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

