import Axios from "axios";
import { API_ROUTES } from "../../utils/constants";
import { useForm, Controller } from "react-hook-form";
import "./ContactForm.scss";

const MyForm = () => {
  //En définissant defaultValues dans useForm, on s'assure que chaque champ de formulaire 
  //contrôlé a une valeur initiale définie, et on évite ainsi l'erreur de composant non contrôlé à contrôlé.
  const { handleSubmit, control } = useForm(
    {
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        request: "",
      },
    }
  );
  const onSubmit = async (data) => {
    try {
      // Envoi des données au backend
      const response = await Axios.post(`${API_ROUTES.CONTACT}`, data);
      console.log(response.data); // Si besoin de traiter la réponse
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'envoi des données:", error);
    }
  };

  // const onSubmit = (data) => {
  //   // Gérer la soumission des données ici avec requête HTTP et axios ds tt cça ?
  //   console.log(data);
  //   // envoyer ces données au backend maintenant dès que je l'aurai installé
 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Prénom :</label>
      <Controller
        name="firstName"
        control={control}
        rules={{ required: "Le prénom est obligatoire" }}
        render={({ field, fieldState }) => (
          <div>
            <input {...field} placeholder="Prénom" />
            {fieldState.error && <div>{fieldState.error.message}</div>}
          </div>
        )}
      />

      <label>Nom :</label>
      <Controller
        name="lastName"
        control={control}
        rules={{ required: "Le nom est obligatoire" }}
        render={({ field, fieldState }) => (
          <div>
            <input {...field} placeholder="Nom" />
            {fieldState.error && <div>{fieldState.error.message}</div>}
          </div>
        )}
      />

      <label>E-mail :</label>
      <Controller
        name="email"
        control={control}
        rules={{ required: "L'adresse mail est obligatoire" }}
        render={({ field, fieldState }) => (
          <div>
            <input {...field} type="email" placeholder="Adresse mail" />
            {fieldState.error && <div>{fieldState.error.message}</div>}
          </div>
        )}
      />

      <label>Votre projet :</label>
      <Controller
        name="request"
        control={control}
        rules={{ required: "Description du projet obligatoire" }}
        render={({ field, fieldState }) => (
          <div>
            <textarea
              {...field}
              placeholder="Décrivez-nous en quelques lignes votre projet"
            />
            {fieldState.error && <div>{fieldState.error.message}</div>}
          </div>
        )}
      />

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default MyForm;
