import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


import Input from 'src/components/Inputs/Text';

const SignIn = () => (
  <>
    <h1>Connexion</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        acceptedTerms: false,
        jobType: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
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
          label="Adresse Mail"
          name="email"
          type="email"
          placeholder="sherlock.holmes@cobaye.com"
        />
        <Input
          label="Mot de Passe"
          name="password"
          type="password"
        />
      <div>
      <button type="button"><Link to="/">Retour</Link></button>
        <button type="submit">Se connecter</button>
      </div>
      </Form>
    </Formik>
  </>
);

export default SignIn;