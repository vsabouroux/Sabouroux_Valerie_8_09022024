import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "./Form.scss";

const MyForm = () => {
  const { handleSubmit, control } = useForm();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");

  const onSubmit = (data) => {
    // Gérer la soumission des données ici avec requête HTTP et axios ds tt cça ?
    console.log(data);
    // envoyer ces données au backend maintenant dès que je l'aurai installé
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
            <input
              {...field}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Prénom"
            />
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
            <input
              {...field}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Nom"
            />
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
            <input
              {...field}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresse mail"
            />
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
              value={request}
              onChange={(e) => setRequest(e.target.value)}
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
