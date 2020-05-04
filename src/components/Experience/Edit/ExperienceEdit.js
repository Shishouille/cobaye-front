import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// + d'infos ici : https://betterstack.dev/projects/react-tag-input/
import ReactTagInput from '@pathofdev/react-tag-input';

import { fr } from 'date-fns/locale';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';

import Layout from 'src/containers/Layout';
import Select from 'src/components/Inputs/Select';
import Input from 'src/components/Inputs/Text';
import CheckBox from 'src/components/Inputs/CheckBox';
import TextArea from 'src/components/Inputs/TextArea';


const ExperienceEdit = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [tags, setTags] = React.useState(['experience']);

  const [criterias, addCriterias] = useState([]);
  return (
    <Layout>
      <h1>Création d'expérience</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          expType: '',
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
        {(props) => (
          <Form>
            <h2>Général</h2>
            <Input
              label="Nom de l'Expérience"
              name="firstName"
              type="text"
              placeholder="Sherlock"
            />
            <ReactTagInput
              tags={tags}
              placeholder="Ajouter des mots-clés"
              onChange={(newTags) => setTags(newTags)}
            />
            <TextArea
              label="Description"
              name="lastName"
              type="text"
              placeholder="Holmes"
            />
            <Select label="Type de Passation" name="expType">
              <option value="">Quel est le type de Passation ?</option>
              <option value="questionnary">Questionnaire</option>
              <option value="meeting">Entretien</option>
              <option value="experience">Expérience</option>
              <option value="observation">Observation</option>
            </Select>
            {props.values.expType === 'questionnary'
          && (
            <Input
              label="Lien de votre Questionnaire"
              name="questionnaryLink"
              type="url"
            />
          )}
            <Input
              label="Durée"
              name="time"
              type="text"
            />
            <Input
              label="Nombre d'étapes"
              name="steps"
              type="number"
              min="1"
            />
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}
              minimumDate={new Date()}
              format="dd MMM yyyy"
              locale={fr}
            >
              {({ startDateInputProps, endDateInputProps, focus }) => (
                <div className="date-range">
                  <Input
                    className={`input${focus === START_DATE ? ' -focused' : ''}`}
                    {...startDateInputProps}
                    placeholder="Période - Début"
                    name="periodStart"
                  />
                  <span className="date-range_arrow" />
                  <Input
                    className={`input${focus === END_DATE ? ' -focused' : ''}`}
                    {...endDateInputProps}
                    placeholder="Période - Fin"
                    name="periodEnd"
                  />
                </div>
              )}
            </DateRangePicker>
            <h2>Critères d'inclusion</h2>
            <div>
              <h3>Genre</h3>
              <CheckBox label="Genre" name="woman">
                Femme
              </CheckBox>
              <CheckBox label="Genre" name="man">
                Homme
              </CheckBox>
              <CheckBox label="Genre" name="other">
                Autre
              </CheckBox>
            </div>
            <div>
              <h3>Population</h3>
              <CheckBox label="Population" name="baby">
                Bébés (0-3ans)
              </CheckBox>
              <CheckBox label="Population" name="toddler">
                Bambin (3-6ans)
              </CheckBox>
              <CheckBox label="Population" name="child">
                Enfants (6-12ans)
              </CheckBox>
              <CheckBox label="Population" name="preteen">
                Préadolescent (12-16ans)
              </CheckBox>
              <CheckBox label="Population" name="teenager">
                Adolescent (16-18ans)
              </CheckBox>
              <CheckBox label="Population" name="adult">
                Adulte (18+ ans)
              </CheckBox>
            </div>
            <div>
              <h3>Profession</h3>
              <CheckBox label="Profession" name="worker">
                Employé
              </CheckBox>
              <CheckBox label="Profession" name="cadre">
                Cadre
              </CheckBox>
            </div>
            <div>
              <h3>Niveau d'études</h3>
              <CheckBox label="Niveau d'études" name="bac">
                BAC
              </CheckBox>
              <CheckBox label="Niveau d'études" name="bac-2">
                BAC+2
              </CheckBox>
              <CheckBox label="Niveau d'études" name="bac-3">
                BAC+5
              </CheckBox>
            </div>
            <div>
              <h3>Rémunération ?</h3>
              <CheckBox label="Genre" name="woman">
                Oui/Non
              </CheckBox>
            </div>
            <div>
              <h3>Critères Spécifiques</h3>
              {criterias.length > 0 && (
                criterias.map((criteria) => (
                  <>
                    <Input
                      label="Nouveau critère"
                      name={criteria.name}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        addCriterias(criterias.filter((removedCriteria) => removedCriteria.name !== criteria.name));
                      }}
                    >Enlever ce critère
                    </button>
                  </>
                ))
              )}
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  addCriterias([...criterias, { name: `criteria${criterias.length}` }]);
                }}
              >Rajouter un critère
              </button>
            </div>
            <div>
              <button type="submit">Confirmer</button>
            </div>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default ExperienceEdit;
