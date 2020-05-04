import React from 'react';

import Layout from 'src/containers/Layout';
import ExperiencePreview from './ExperiencePreview';
import ExperienceFilter from './ExperienceFilter';

const ExperiencesList = () => (
  <Layout>
    <h1>Experiences</h1>
    <ExperienceFilter />
    <div>
      <ExperiencePreview slug="1" />
      <ExperiencePreview />
      <ExperiencePreview />
      <ExperiencePreview />
      <ExperiencePreview />
      <ExperiencePreview />
      <ExperiencePreview />
      <ExperiencePreview />
      <ExperiencePreview />
    </div>
  </Layout>
);

export default ExperiencesList;
