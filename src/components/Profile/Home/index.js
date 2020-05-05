import React from 'react';

import Layout from 'src/containers/Layout';

import ExperienceCard from './ExperienceCard';
import CreatedExperience from './CreatedExperience';
import ProfileCalendar from './ProfileCalendar';
import ProfileNotifications from './ProfileNotifications';

import StyledProfile from './StyledProfile';


const ProfilePage = ({ isScientist }) => (
  <Layout>
    <StyledProfile>
      <h1>Mon Profil</h1>
      <h2>Experiences à venir</h2>
      <div className="exp-wrapper">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
      {isScientist && (
      <div>
        <h2>Vos Expériences</h2>
        <CreatedExperience />
      </div>
      )}
      <div className="profile-main">
        <ProfileNotifications />
        <ProfileCalendar />
      </div>
    </StyledProfile>
  </Layout>
);

export default ProfilePage;
