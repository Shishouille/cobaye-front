import React from 'react';

import Layout from 'src/components/Layout';
import ExperienceFullHeader from './ExperienceFullHeader';
import ExperienceFullFooter from './ExperienceFullFooter';
import StyledExperience from './StyledExperience';

const ExperienceCriterias = () => (
  <Layout>
    <ExperienceFullHeader />
    <StyledExperience>
      <section>
        <h2>Critères généraux</h2>
        <div>
          <h3>Genre</h3>
          <img src="" alt="" />
          <p>Homme</p>
          <img src="" alt="" />
          <p>Femme</p>
          <img src="" alt="" />
          <p>Autre</p>
        </div>
        <div>
          <span>20-30</span>
          <p>Âge</p>
        </div>
        <div>
          <span>NSC</span>
          <p>Niveau Socio Culturel</p>
        </div>
      </section>
      <section>
        <h2>Critères spécifiques</h2>
        <ul>
          <li>Activité physique | Oui | Non</li>
          <li>Poids | >70kg </li>
          <li>Trouble psychologique | Oui | Non</li>
          <li>Maladie cardiaque | Oui | Non</li>
        </ul>
      </section>
    </StyledExperience>
    <ExperienceFullFooter />
  </Layout>
);

export default ExperienceCriterias;
