import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Select from 'src/components/Inputs/Select';
import Input from 'src/components/Inputs/Text';
import Checkbox from 'src/components/Inputs/CheckBox';

import SignUpConfirm from './SignupConfirm';

const SignupForm = () => (
  <>
    <h1>Inscription - Cobaye </h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        acceptedTerms: false,
        gender: '',
        profession: '',
        nsc: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Votre prénom ne doit pas dépasser les 15 caractères')
          .required('Ce champs est requis.'),
        lastName: Yup.string()
          .max(15, 'Votre nom ne doit pas dépasser les 15 caractères')
          .required('Ce champs est requis.'),
        email: Yup.string()
          .email('Votre email n\'est pas valide.')
          .required('Ce champs est requis.'),
        password: Yup.string()
          .required('Votre mot de passe est requis.'),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Vos mots de passe doivent correspondre.')
          .required('Veuillez répéter votre mot de passe.'),
        acceptedTerms: Yup.boolean()
          .required('Ce champs est requis.')
          .oneOf([true], 'Vous devez accepter les termes et conditions.'),
        birthday: Yup.date('Ce champs doit être une date'),
        gender: Yup.string()
          .required(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // values retourne un objet avec toutes mes valeurs
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <Input
          label="Prénom"
          name="firstName"
          type="text"
          placeholder="Sherlock"
        />
        <Input
          label="Nom"
          name="lastName"
          type="text"
          placeholder="Holmes"
        />
        <Input
          label="Adresse Mail"
          name="email"
          type="email"
          placeholder="sherlock.holmes@cobaye.com"
        />
        <Input
          label="Mot de passe"
          name="password"
          type="password"
        />
        <Input
          label="Répétez votre Mot de passe"
          type="password"
          name="passwordConfirm"
        />
        <Input
          label="Date de Naissance"
          name="birthday"
          type="date"
          placeholder="JJ/MM/AAAA"
        />
        <Select label="Genre" name="gender">
          <option value="">Quel est votre genre ?</option>
          <option value="woman">Femme</option>
          <option value="man">Homme</option>
          <option value="other">Autre</option>
        </Select>
        <Select label="Profession" name="profession">
          <option value="">Quel est votre profession ?</option>
          <option value="job-a">Agitateur</option>
          <option value="job-b">Provocateur</option>
          <option value="job-c">Animal</option>
        </Select>
        <Select label="Niveau d'études" name="nsc">
          <option value="">Quel est votre niveau d'études ?</option>
          <option value="nsc-1">BAC</option>
          <option value="nsc-2">BAC+2</option>
          <option value="nsc-3">Bac+5</option>
        </Select>
        <Checkbox name="acceptedTerms">
          J'accepte les termes et les conditions ci-dessous :
          Blablabla
        </Checkbox>
        <SignUpConfirm />
      </Form>
    </Formik>
  </>
);

export default SignupForm;
