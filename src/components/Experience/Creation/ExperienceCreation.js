import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// + d'infos ici : https://betterstack.dev/projects/react-tag-input/
import ReactTagInput from '@pathofdev/react-tag-input';

import { fr } from 'date-fns/locale';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';

import { InlineIcon } from '@iconify/react';
import checkmarkCircleOutline from '@iconify/icons-eva/checkmark-circle-outline';
import addIcon from '@iconify/icons-gridicons/add';
import circleWithMinus from '@iconify/icons-entypo/circle-with-minus';


import Layout from 'src/containers/Layout';
import Select from 'src/components/Inputs/Select';
import Input from 'src/components/Inputs/Text';
import CheckBox from 'src/components/Inputs/CheckBox';
import ToggleSwitch from 'src/components/Inputs/ToggleSwitch';
import TextArea from 'src/components/Inputs/TextArea';

import { StyledButtonForm } from 'src/GlobalStyles/StyledButton';
import { StyledLabel } from 'src/components/Inputs/StyledInput';
import StyledForm from './StyledForm';


const ExperienceCreation = ({
  passationsTypes,
  generalCriterias,
  createExperience,
  saveForm,
  form,
}) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [tags, setTags] = React.useState(['experience']);

  const [criterias, addCriterias] = useState([]);

  return (
    <Layout>
      <h1>Création d'expérience</h1>
      <Formik
        initialValues={{
          title: '',
          description: '',
          passationType: '',
          questionnaryLink: '',
          time: '',
          steps: 1,
          minParticipants: 1,
          expType: '',
          criterias,
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(15, 'Votre titre est trop long')
            .required('Ce champ est requis.'),
          steps: Yup.number()
            .required('Vous devez préciser le nombre d\'étapes (1 minimum)')
            .min(1, 'Une étape minimum est requise.'),
          minParticipants: Yup.number()
            .required('Vous devez préciser le nombre minimum de participants.')
            .min(1, 'Une expérience ne se fait pas sans personne!'),
          time: Yup.string()
            .required('Vous devez indiquer une durée'),
          participation: Yup.string()
            .required('Vous devez indiquer une durée'),
          expType: Yup.string()
            .required('Vous devez indiquer le type de passation.'),
          description: Yup.string()
            .min(20, 'Votre description doit être fournie.')
            .required('Votre description doit être fournie.'),
          questionnaryLink: Yup.string()
            .url('Votre lien ne correspond pas à une URL.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
        // values retourne un objet avec toutes mes valeurs
          const formData = {
            ...values,
            tags,
            startDate,
            endDate,
            money: !values.money,
            criterias: values.criterias.filter((criteria) => criteria !== '').map((criteria) => ({ criteria, category: 0 })),
            generalCriterias: {
              gender: Object.keys(values.generalCriterias.gender).map((gender) => ({ gender, category: 1 })),
              age: Object.keys(values.generalCriterias.age).map((age) => ({ age, category: 2 })),
              profession: Object.keys(values.generalCriterias.profession).map((profession) => ({ profession, category: 2 })),
              studies: Object.keys(values.generalCriterias.studies).map((study) => ({ study, category: 2 })),
            },
          };
          const newArray = [...formData.criterias, ...formData.generalCriterias.gender, ...formData.generalCriterias.age, ...formData.generalCriterias.profession, ...formData.generalCriterias.studies];
          console.log(newArray);
          setTimeout(() => {
            saveForm({
              ...formData, criterias: newArray,
            });
            createExperience();
            setSubmitting(false);
          }, 400);
        }}
      >
        {(props) => (
          <Form>
            <StyledForm>
              <h2>Général</h2>
              <Input
                label="Nom de l'Expérience"
                name="title"
                type="text"
                placeholder="Nom de votre expérience"
              />
              <StyledLabel htmlFor="tags">Ajoutez des mots-clés</StyledLabel>
              <ReactTagInput
                tags={tags}
                placeholder="Ajouter des mots-clés (10 maximum)"
                maxTags="10"
                onChange={(newTags) => setTags(newTags)}
              />
              <TextArea
                label="Description"
                name="description"
                placeholder="Insérez la description de votre expérience ici."
                rows="10"
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
              <Select
                label="Durée"
                name="time"
              >
                <option value="">Sélectionnez votre durée : </option>
                <option value="5">5min</option>
                <option value="10">10min</option>
                <option value="15">15min</option>
                <option value="30">30min</option>
                <option value="45">45min</option>
                <option value="100">1h00</option>
                <option value="115">1h15</option>
                <option value="130">1h30</option>
                <option value="145">1h45</option>
                <option value="200">2h</option>
                <option value="250">2h+</option>
              </Select>
              <Input
                label="Nombre d'étapes"
                name="steps"
                type="number"
                min="1"
              />
              <Input
                label="Nombre de participants requis"
                name="participation"
                type="number"
                min="1"
              />
              <StyledLabel htmlFor="Passation">Période de passation</StyledLabel>
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
                <CheckBox label="Genre" name="generalCriterias.gender.woman">
                  Femme
                </CheckBox>
                <CheckBox label="Genre" name="generalCriterias.gender.man">
                  Homme
                </CheckBox>
                <CheckBox label="Genre" name="generalCriterias.gender.other">
                  Autre
                </CheckBox>
              </div>
              <div>
                <h3>Population</h3>
                <CheckBox label="Population" name="generalCriterias.age.baby">
                  Bébés (0-3ans)
                </CheckBox>
                <CheckBox label="Population" name="generalCriterias.age.toddler">
                  Bambin (3-6ans)
                </CheckBox>
                <CheckBox label="Population" name="generalCriterias.age.child">
                  Enfants (6-12ans)
                </CheckBox>
                <CheckBox label="Population" name="generalCriterias.age.preteen">
                  Préadolescent (12-16ans)
                </CheckBox>
                <CheckBox label="Population" name="generalCriterias.age.teenager">
                  Adolescent (16-18ans)
                </CheckBox>
                <CheckBox label="Population" name="generalCriterias.age.adult">
                  Adulte (18+ ans)
                </CheckBox>
              </div>
              <div>
                <h3>Secteur de Profession</h3>
                <CheckBox label="Profession" name="generalCriterias.profession.worker">
                  Employé
                </CheckBox>
                <CheckBox label="Profession" name="generalCriterias.profession.cadre">
                  Cadre
                </CheckBox>
              </div>
              <div>
                <h3>Niveau d'études</h3>
                <CheckBox label="Niveau d'études" name="generalCriterias.studies.bac">
                  BAC
                </CheckBox>
                <CheckBox label="Niveau d'études" name="generalCriterias.studies.bac2">
                  BAC+2
                </CheckBox>
                <CheckBox label="Niveau d'études" name="generalCriterias.studies.bac3">
                  BAC+5
                </CheckBox>
              </div>
              <div>
                <h3>Rémunération ?</h3>
                <ToggleSwitch label="Rémunération" name="remuneration" />
              </div>
              <div>
                <h3>Critères Spécifiques</h3>
                {criterias.length > 0 && (
                  criterias.map((criteria, index) => (
                    <div className="form-criterias">
                      <Input
                        label={`Nouveau critère ${index + 1}`}
                        placeholder="Entrez votre critère"
                        name={`criterias[${index}]`}
                      />
                      <StyledButtonForm
                        type="button"
                        onClick={() => {
                          addCriterias(criterias.filter((removedCriteria) => removedCriteria !== criteria));
                          props.values.criterias[index] = '';
                        }}
                      >
                        <InlineIcon icon={circleWithMinus} color="white" />Enlever ce critère
                      </StyledButtonForm>
                    </div>
                  ))
                )}
              </div>
              <div>
                <StyledButtonForm
                  type="button"
                  onClick={() => {
                    addCriterias([...criterias, { name: `criteria${criterias.length}` }]);
                  }}
                >
                  <InlineIcon icon={addIcon} color="white" /> Rajouter un critère
                </StyledButtonForm>
              </div>
              <div>
                <StyledButtonForm type="submit"><InlineIcon icon={checkmarkCircleOutline} color="white" />Confirmer</StyledButtonForm>
              </div>
            </StyledForm>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default ExperienceCreation;
