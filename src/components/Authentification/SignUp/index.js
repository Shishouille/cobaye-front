import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { StyledButtonForm } from 'src/GlobalStyles/StyledButton';
import StyledLink from 'src/GlobalStyles/StyledLink';

import LoadingPage from 'src/components/Loading';
import Select from 'src/components/Inputs/Select';
import Input from 'src/components/Inputs/Text';
import Checkbox from 'src/components/Inputs/CheckBox';
import AuthHeader from '../AuthHeader';

import StyledForm from '../StyledForm';

// TODO: Autosuggestion + rajouter des métiers

const SignupForm = ({
  formData, selectionData, saveForm, signUp, loading,
}) => (
  <>
    <AuthHeader />
    {loading ? (
      <LoadingPage />
    ) : (
      <>
        <StyledForm>
          <h1>Inscription - Cobaye </h1>
          <div>
            <Link to="/inscription"><StyledButtonForm type="button">Je suis cobaye</StyledButtonForm></Link>
            <Link to="/inscription/chercheur"><StyledButtonForm type="button">Je suis chercheur</StyledButtonForm></Link>
          </div>
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
              role: selectionData.roles[0]._id,
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(15, 'Votre prénom ne doit pas dépasser les 15 caractères')
                .required('Votre prénom est requis.'),
              lastName: Yup.string()
                .max(15, 'Votre nom ne doit pas dépasser les 15 caractères')
                .required('Votre nom est requis.'),
              email: Yup.string()
                .email('Votre email n\'est pas valide.')
                .required('Votre email est requis.'),
              password: Yup.string()
                .required('Votre mot de passe est requis.')
                .min(6, 'Votre mot de passe ne doit pas être trop court.'),
              passwordConfirm: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Vos mots de passe doivent correspondre.')
                .required('Veuillez répéter votre mot de passe.'),
              acceptedTerms: Yup.boolean()
                .required('Ce champs est requis.')
                .oneOf([true], 'Vous devez accepter les termes et conditions.'),
              birthday: Yup.date('Ce champs doit être une date'),
              gender: Yup.string()
                .required('Ce champs est requis.'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              // values retourne un objet avec toutes mes valeurs
              setTimeout(() => {
                saveForm(values);
                signUp();
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <div className="form-input">
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
              </div>
              <Select label="Genre" name="gender">
                <option value="">Quel est votre genre ?</option>
                {selectionData.genders.map((gender) => (<option key={gender._id} value={gender._id}> {gender.name} </option>))}
              </Select>
              <Select label="Profession" name="profession">
                <option value="">Quel est votre profession ?</option>
                {selectionData.professions.map((profession) => (<option key={profession._id} value={profession._id}> {profession.name} </option>))}
              </Select>
              <Select label="Niveau d'études" name="nsc">
                <option value="">Quel est votre niveau d'études ?</option>
                {selectionData.nscs.map((nsc) => (<option key={nsc._id} value={nsc._id}> {nsc.name} </option>))}
              </Select>
              <Checkbox name="acceptedTerms">
                J'accepte les termes et les conditions ci-dessous :
                Faire un onclick sur les termes (Page à faire)
              </Checkbox>
              <div>
                <div>
                  <Link to="/connexion"> <StyledLink>Déjà inscrit ?</StyledLink></Link>
                </div>
                <div>
                  <StyledButtonForm type="submit">Confirmer</StyledButtonForm>
                  <Link to="/"><StyledButtonForm type="button">Annuler</StyledButtonForm></Link>
                </div>
              </div>
            </Form>
          </Formik>
        </StyledForm>
      </>
    )}
  </>
);
export default SignupForm;
