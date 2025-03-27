import { useEffect, useState } from "react";
import Button from "../components/button";
import Swal from "sweetalert2";

export default function Inscription() {
  useEffect(() => {
    document.title = "Inscription - LinkStudy";
  }, []);

  // État pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    forname: "",
    email: "",
    password: "",
    confirmPassword: "",
    pseudo: "",
    date_of_birth: ""
  });

  // État pour gérer les erreurs par champ
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Fonction pour mettre à jour les données du formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Supprime l'erreur associée au champ s'il est corrigé
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Fonctions de validation
  const validateName = (value: string) => value.trim() !== "";

  const validateForname = (value: string) => value.trim() !== "";

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const validateEmailUnique = async (value: string): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok){
        throw new Error("Erreur lors de la vérification de l'email");
      }
      const users = await response.json();
      const emailExists = users.some((user: any) => user.email === value);
      return !emailExists;
    } catch (error) {
      console.error("Erreur lors de la validation de l'email : ", error);
      return false;
    }
  };

  const validatePassword = (value: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/.test(value.trim());

  const validateDateOfBirth = (value: string) => {
    const birthDate = new Date(value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    return age >= 16; // L'utilisateur doit avoir au moins 16 ans
  };

  // Validation du pseudo
  const validatePseudo = async (value: string): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      if (!response.ok) {
        throw new Error("Erreur lors de la vérification du pseudo.");
      }
      const users = await response.json();
      const pseudoExists = users.some((user: any) => user.pseudo === value);
      return !pseudoExists;
    } catch (error) {
      console.error("Erreur de validation du pseudo:", error);
      return false;
    }
  };

  // Validation complète du formulaire
  const validateForm = async () => {
    let newErrors: { [key: string]: string } = {};

    if (!validateName(formData.name)) newErrors.name = "Please enter a name";
    if (!validateForname(formData.forname)) newErrors.forname = "Please enter a forname";
    if (!validateEmail(formData.email)){
      newErrors.email = "Please enter a valid email (ex: test@test.com)";
    } else {
      const isEmailValid = await validateEmailUnique(formData.email);
      if (!isEmailValid) newErrors.email = "This email already exists";
    }
    if (!validateEmailUnique(formData.email)) newErrors.email = "This email already exists";
    if (!validatePassword(formData.password)) newErrors.password =
      "The password must contain 8 characters, a capital letter, a number and a symbol";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "The passwords do not match";
    if (!formData.pseudo.trim()) {
      newErrors.pseudo = "Username is required";
    } else {
      const isPseudoValid = await validatePseudo(formData.pseudo);
      if (!isPseudoValid) newErrors.pseudo = "This pseudo already exists";
    }
    if (!formData.date_of_birth) {
      newErrors.date_of_birth = "Date of birth is required";
    } else if (!validateDateOfBirth(formData.date_of_birth)) {
      newErrors.date_of_birth = "You must be at least 16 years old";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fonction pour envoyer le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut

    const isValid = await validateForm(); // Attendre la validation avant de continuer
    if (!isValid) return;

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Échec de l'inscription.");
      }

      Swal.fire({
        text: `Congrats ${formData.forname}, you are now subscribed and you can connect yourself`,
        icon: "success",
        position: "center",
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {                   
        document.location.href = "/connexion";
      });

    } catch (error) {
      Swal.fire({
        text: "Error during the inscription process",
        icon: "error",
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false
      });
    }
  }

  return (
    <div className="bg-secondary flex flex-col gap-y-5 items-center mt-[50vh] transform -translate-y-1/2 w-auto max-w-lg mx-auto rounded-xl shadow-lg p-5">
      <p className="text-yellow-500 text-4xl font-medium racing-sans-one-regular">
        Inscription
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        {[
          { name: "name", label: "Name", type: "text" },
          { name: "forname", label: "Forname", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "password", label: "Password", type: "password" },
          { name: "confirmPassword", label: "Confirm your password", type: "password" },
          { name: "pseudo", label: "Pseudo", type: "text" },
          { name: "date_of_birth", label: "Date of birth", type: "date" }
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
                errors[name] ? "border-yellow-500 border-2" : "border-black border-2"
              }`}
              placeholder={`Entrez votre ${label.toLowerCase()}`}
              value={formData[name as keyof typeof formData]}
              onChange={handleInputChange}
            />
            {errors[name] && <p className="text-yellow-500 text-sm font-semibold">{errors[name]}</p>}
          </div>
        ))}

        <div className="mx-auto mt-3">
          <Button text="Inscription" color="bg-yellow-500" />
        </div>
      </form>
    </div>
  );
}

