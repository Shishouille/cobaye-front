import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from 'src/components/Inputs/Text';
import StyledLink from 'src/GlobalStyles/StyledLink';
import { StyledButtonForm } from 'src/GlobalStyles/StyledButton';
import AuthHeader from '../AuthHeader';
import StyledForm from '../StyledForm';


const SignIn = ({ formData, saveForm, signIn }) => (
  <>
    <AuthHeader />
    <StyledForm>
      <h1>Connexion</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Votre email n\'est pas valide.')
            .required('Ce champs est requis.'),
          password: Yup.string()
            .required('Votre mot de passe est requis.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
        // values retourne un objet avec toutes mes valeurs
          setTimeout(() => {
            saveForm(values);
            signIn();
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className="form-input">
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
          </div>
          <div>
            <StyledLink><Link to="/inscription">Pas encore inscrit ?</Link></StyledLink>
          </div>
          <div>
            <StyledButtonForm type="submit">Se connecter</StyledButtonForm>
            <Link to="/"><StyledButtonForm type="button">Retour</StyledButtonForm></Link>
          </div>
        </Form>
      </Formik>
    </StyledForm>
  </>
);

export default SignIn;
