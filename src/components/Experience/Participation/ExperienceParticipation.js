import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { fr } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';

import Layout from 'src/containers/Layout';
import Select from 'src/components/Inputs/Select';
import Input from 'src/components/Inputs/Text';
import CheckBox from 'src/components/Inputs/CheckBox';
import TextArea from 'src/components/Inputs/TextArea';

const ExperienceParticipation = () => {
  const [date, setDate] = useState();
  return (
    <Layout>
      <h1>Participer à l'expérience</h1>
      <Formik
        initialValues={{
          title: '',
          description: '',
          questionnaryLink: '',
          expType: '',
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(15, 'Votre titre est trop long')
            .required('Ce champ est requis.'),
          time: Yup.string()
            .required('Ce champ est requis.'),
          description: Yup.string()
            .min(20, 'Votre description doit être fournie.')
            .required('Ce champ est requis.'),
          questionnaryLink: Yup.string()
            .url('Votre lien ne correspond pas à une URL.'),
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
          <div>
            <h2>Choisissez une date : </h2>
            <DatePicker date={date} onDateChange={setDate} locale={fr}>
              {({ inputProps, focused }) => (
                <Input
                  className={`input${focused ? ' -focused' : ''}`}
                  name="date"
                  {...inputProps}
                />
              )}
            </DatePicker>
          </div>
          <div>
            <h2>Choisissez une horaire : </h2>
            <Select name="time" id="">
              <option value="10" />
              <option value="15" />
              <option value="20" />
              <option value="25" />
            </Select>
          </div>
          <h2>Pourquoi souhaitez vous participer à l'expérience ? (Optionnel)</h2>
          <TextArea
            label="Avis"
            name="avis"
            placeholder="Expliquez ici"
          />
          <CheckBox name="acceptedTerms">
            Je m'engage à respecter ces horaires et prévenir le chercheur ou annuler le rendez-vous en cas d'imprévu.
          </CheckBox>
          <button type="submit">Valider votre participation</button>
        </Form>
      </Formik>
    </Layout>
  );
};

export default ExperienceParticipation;
