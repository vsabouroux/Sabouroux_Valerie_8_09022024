import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./Form.scss";

const MyForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Gérer la soumission des données ici avec requête HTTP et axios ds tt cça ?
    console.log(data);
    // envoyer ces données au backend maintenant
  };

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

      <label>Adresse e-mail :</label>
      <Controller
        name="email"
        control={control}
        rules={{ required: "L'adresse e-mail est obligatoire" }}
        render={({ field, fieldState }) => (
          <div>
            <input {...field} type="email" placeholder="Adresse e-mail" />
            {fieldState.error && <div>{fieldState.error.message}</div>}
          </div>
        )}
      />

      <label>Votre projet :</label>
      <Controller
        name="request"
        control={control}
        rules={{ required: "Décrivez en quelques lignes votre projet" }}
        render={({ field, fieldState }) => (
          <div>
            <textarea {...field} placeholder="Projet" />
            {fieldState.error && <div>{fieldState.error.message}</div>}
          </div>
        )}
      />

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default MyForm;
