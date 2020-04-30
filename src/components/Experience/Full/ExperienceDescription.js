import React from 'react';

import Layout from 'src/components/Layout';
import ExperienceFullHeader from './ExperienceFullHeader';
import ExperienceFullFooter from './ExperienceFullFooter';
import StyledExperience from './StyledExperience';

const ExperienceDescription = () => (
  <Layout>
    <ExperienceFullHeader />
    <StyledExperience>
      <div className="exp-title">
        <img src="" alt="Genre/Domaine" />
        <h1>Nom de l'expérience</h1>
      </div>
      <section className="exp-header">
        <div>
          <img src="" alt="" />
          <h2>Nom de l'université</h2>
          <p>Domaine</p>
          <p>Lieu</p>
        </div>
        <div>
          <img src="" alt="" />
          <h2>Nom du chercheur</h2>
          <p>Titre ?</p>
          <p>Domaine de recherche</p>
          <p>Si connecté : Nombre des participations avec ce chercheur</p>
        </div>
      </section>
      <section>
        <div>
          <p>Vous avez rendez-vous le machin à truc</p>
          <button type="button">Annuler le rendez-vous</button>
          <button type="button">Modifier le rendez-vous</button>
        </div>
      </section>
      <section>
        <div>
          <h2>Objectif de l'expérience</h2>
          <p>...</p>
        </div>
        <div>
          <h2>Description</h2>
          <p>...</p>
        </div>
        <div>
          <h2>Méthodologie</h2>
          <p>...</p>
        </div>
      </section>
    </StyledExperience>
    <ExperienceFullFooter />
  </Layout>
);

export default ExperienceDescription;
