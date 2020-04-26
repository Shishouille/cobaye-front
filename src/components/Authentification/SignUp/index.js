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
        acceptedTerms: false,
        jobType: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You must accept the terms and conditions.'),
        gender: Yup.string()
          .oneOf(
            ['woman', 'man', 'other'],
            'Genre non identifié',
          )
          .required('Required'),
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
          type="text"
          name="repeat-password"
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
