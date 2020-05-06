import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { fr } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';

import { StyledButtonForm } from 'src/GlobalStyles/StyledButton';

import Layout from 'src/containers/Layout';
import Select from 'src/components/Inputs/Select';
import Input from 'src/components/Inputs/Text';
import CheckBox from 'src/components/Inputs/CheckBox';
import TextArea from 'src/components/Inputs/TextArea';
import StyledParticipation from './StyledParticipation';

const ExperienceParticipation = () => {
  const [date, setDate] = useState(new Date());
  // const maDate = date.setHours(1, 45, 50);
  // console.log(new Date(maDate).toString());
  return (
    <Layout>
      <h1>Participer à l'expérience</h1>
      <Formik
        initialValues={{
          date,
          time: '',
          motive: '',
          acceptedTerms: '',
        }}
        validationSchema={Yup.object({
          date: Yup.date()
            .required('Vous devez fixer un horaire de rendez-vous.'),
          acceptedTerms: Yup.bool()
            .required('Vous devez vous engager à respecter ce rendez-vous.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // values retourne un objet avec toutes mes valeurs
          console.log(values);
        }}
      >
        <Form>
          <StyledParticipation>
            <div>
              <h2>Choisissez une date : </h2>
              <DatePicker date={date} onDateChange={setDate} locale={fr} minimumDate={new Date()}>
                {({ inputProps, focused }) => (
                  <Input
                    className={`input${focused ? ' -focused' : ''}`}
                    name="date"
                    type="text"
                    {...inputProps}
                  />
                )}
              </DatePicker>
            </div>
            <div>
              <h2>Choisissez une horaire : </h2>
              <Select name="time" id="">
                <option value="10">10</option>
                <option value="15">10</option>
                <option value="20">10</option>
                <option value="25">10</option>
              </Select>
            </div>
            <div className="participation-textarea">
              <h2>Pourquoi souhaitez vous participer à l'expérience ? (Optionnel)</h2>
              <TextArea
                label="Avis"
                name="avis"
                rows="5"
                placeholder="Expliquez ici"
              />
            </div>
            <CheckBox name="acceptedTerms">
              Je m'engage à respecter ces horaires et prévenir le chercheur ou annuler le rendez-vous en cas d'imprévu.
            </CheckBox>
            <StyledButtonForm type="submit">Valider votre participation</StyledButtonForm>
          </StyledParticipation>
        </Form>
      </Formik>
    </Layout>
  );
};

export default ExperienceParticipation;
